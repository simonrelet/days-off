// @flow
import express from 'express';
import path from 'path';

const router: any = express.Router();

router.use((req, res, next) => {
  if (req.cookies['id_token']) {
    res.redirect('/days-off/');
  } else {
    next();
  }
});

router.use(express.static(path.join(__dirname, '..', 'apps', 'login')));

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'apps', 'login', 'index.html'));
});

export default router;
