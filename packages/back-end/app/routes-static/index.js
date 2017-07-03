// @flow
import express from 'express';
import path from 'path';
import qs from 'qs';

function staticPath(packageName, file) {
  return path.join(__dirname, '..', '..', '..', packageName, 'build', file || '');
}

function ensureLoggedIn(req, res, next) {
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
}

function ensureNotLoggedIn(req, res, next) {
  if (req.cookies['id_token']) {
    res.redirect('/days-off/');
  } else {
    next();
  }
}

function routerWithGuard(packageName: string, guard: any): any {
  const router: any = express.Router();
  router.use(guard);
  router.use(express.static(staticPath(packageName)));
  router.get('*', (req, res) => {
    res.sendFile(staticPath(packageName, 'index.html'));
  });
  return router;
}

const router: any = express.Router();
router.use('/login', routerWithGuard('login', ensureNotLoggedIn));
router.use('/days-off', routerWithGuard('days-off', ensureLoggedIn));
router.use((req, res, next) => {
  console.log('originalUrl:', req.originalUrl);
  next();
})
export default router;
