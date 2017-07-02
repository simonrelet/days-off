// @flow
import express from 'express';
import path from 'path';

const router: any = express.Router();

function getApplicationPath(appName: string) {
  return path.join(__dirname, '..', 'apps', appName, 'index.html');
}

const applications = ['login', 'days-off'];

applications.forEach(application => {
  router.get(`/${application}*`, (req, res) => {
    res.sendFile(getApplicationPath(application));
  });
});

export default router;
