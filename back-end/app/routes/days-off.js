// @flow
import express from 'express';
import qs from 'qs';
import path from 'path';

const router: any = express.Router();

router.use((req, res, next) => {
  if (req.cookies['id_token']) {
    res.cookie('id_token', req.cookies['id_token']);
    next();
  } else {
    res.redirect(
      `/login/?${qs.stringify({
        next: req.originalUrl.replace(/^\//, '').replace(/\/$/, ''),
      })}`,
    );
  }
});

router.use(express.static(path.join(__dirname, '..', 'apps', 'days-off')));

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'apps', 'days-off', 'index.html'));
});

export default router;
