'use strict';

const argv = require('minimist')(process.argv.splice(2), {
  alias: { p: 'packages' },
});
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const spawn = require('cross-spawn');

const packages = [];

if (argv.packages) {
  packages.push(argv.packages);
} else {
  fs
    .readdirSync('packages')
    .map(a => path.join('packages', a))
    .forEach(a => packages.push(a));
}

console.log(
  chalk.blue('info') +
    ' Running ' +
    chalk.cyan(argv._.join(' ')) +
    ' in ' +
    packages.length +
    ' package' +
    (packages.length > 1 ? 's' : '') +
    '...'
);

Promise.all(
  packages.map(
    pkg =>
      new Promise((resolve, reject) => {
        const proc = spawn(argv._[0], argv._.slice(1), { cwd: pkg });
        let output = '';
        const handleData = data => (output = output + data);
        proc.stdout.on('data', handleData);
        proc.stderr.on('data', handleData);
        proc.on('close', code => {
          if (code) {
            reject({ code, output, pkg });
          } else {
            console.log(chalk.green('success') + ' ' + pkg);
            resolve();
          }
        });
      })
  )
).catch(err => {
  console.error(chalk.red('error') + ' ' + err.pkg);
  console.error(
    err.output.trim().split(/\n/).map(s => chalk.red('> ') + s).join('\n')
  );
  process.exit(err.code);
});
