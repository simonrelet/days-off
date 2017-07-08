#!/usr/bin/env node
/* eslint strict: "off" */
'use strict';

const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const spawn = require('cross-spawn');

const pkgTree = [
  { pkg: 'back-end' },
  {
    pkg: 'components',
    children: [{ pkg: 'days-off' }, { pkg: 'login' }],
  },
];

function runInPkg(pkgName, args) {
  return new Promise((resolve, reject) => {
    const pkgPath = path.join('packages', pkgName);
    const proc = spawn('yarn', args, {
      cwd: pkgPath,
    });

    let output = '';
    const handleData = data => {
      output = output + data;
    };

    proc.stdout.on('data', handleData);
    proc.stderr.on('data', handleData);

    proc.on('close', code => {
      if (code) {
        reject({ code, output, pkgName, args });
      } else {
        console.log(
          chalk.green('success') +
            ' ' +
            chalk.grey('packages/') +
            pkgName +
            ' ' +
            chalk.grey('$ yarn ' + args.join(' ')),
        );
        resolve();
      }
    });
  });
}

const install = pkgName => runInPkg(pkgName, ['install']);
const build = pkgName => runInPkg(pkgName, ['run', 'build']);

console.log(chalk.grey('[1/2]') + ' Installing project...');

function parallel(children) {
  return Promise.all(
    children.map(child => {
      const childPromise = install(child.pkg).then(() => build(child.pkg));
      return child.children
        ? childPromise.then(() => parallel(child.children))
        : childPromise;
    }),
  );
}

const installPromise = parallel(pkgTree).catch(err => {
  console.error(
    chalk.red('error') +
      ' ' +
      chalk.grey('packages/') +
      err.pkgName +
      ' ' +
      chalk.grey('$ yarn ' + err.args.join(' ')),
  );
  console.error(
    err.output.trim().split(/\n/).map(s => chalk.red('> ') + s).join('\n'),
  );
  process.exit(err.code);
});

function linkPkgWith({ srcPath, dstPath }) {
  return fs
    .remove(dstPath)
    .then(() => fs.ensureSymlink(srcPath, dstPath, 'dir'));
}

function linkPkg(pkgName) {
  const pkgPath = path.join('packages', pkgName);
  const pkgNodeModulesPath = path.join(pkgPath, 'node_modules');

  return fs.readJson(path.join(pkgPath, 'package.json')).then(pkg =>
    Promise.all(
      Object.keys(pkg.dependencies || {}).map(dep => {
        if (/^file:/.test(pkg.dependencies[dep])) {
          const dstPath = path.resolve(path.join(pkgNodeModulesPath, dep));
          const srcPath = path.resolve(
            path.join(pkgPath, pkg.dependencies[dep].substring(5)),
          );
          const linkedPkgName = path.relative(
            path.resolve('packages'),
            srcPath,
          );

          return linkPkgWith({ dstPath, srcPath }).then(() => {
            console.log(
              chalk.green('success') + ' ' + chalk.grey('packages/') + pkgName,
            );
            const linkedPkgSubPath = linkedPkgName.replace(/^[^/]*/, '');
            console.log(
              '        └─ ' +
                chalk.grey('packages/') +
                linkedPkgName.replace(/\/.*/, '') +
                (linkedPkgSubPath ? chalk.grey(linkedPkgSubPath) : ''),
            );
          });
        }
        return Promise.resolve();
      }),
    ),
  );
}

installPromise.then(() => {
  console.log(chalk.grey('[2/2]') + ' Linking packages...');
  if (process.env.CI) {
    console.warn(chalk.yellow('warning') + ' Skiping step in CI.');
    return Promise.resolve();
  }
  return fs.readdir('packages').then(pkgs => Promise.all(pkgs.map(linkPkg)));
});
