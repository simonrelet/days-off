// @flow
import express from 'express';
import qs from 'qs';
import path from 'path';

const router: any = express.Router();

function ensureLoggedIn(req, res, next) {
  if (req.cookies.token) {
    res.cookie('id_token', req.cookies['id_token']);
    next();
  } else {
    res.redirect(`/login?${qs.stringify({ next: req.originalUrl })}`);
  }
}

function ensureNotLoggedIn(req, res, next) {
  if (req.cookies.token) {
    res.redirect('/days-off');
  } else {
    next();
  }
}

function getApplicationPath(appName: string) {
  return path.join(__dirname, '..', 'apps', appName, 'index.html');
}

router.get('/login', ensureNotLoggedIn, (req, res) => {
  res.sendFile(getApplicationPath('login'));
});

router.get('/days-off', ensureLoggedIn, (req, res) => {
  res.sendFile(getApplicationPath('login'));
});

export default router;
