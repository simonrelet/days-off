// @flow
import express from 'express';
import db from '../db';

const router: any = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.cookie('id_token', `TOKEN-FOR-${username}`);
  } else {
    res.status(400).json({
      message: 'Invalid credentials',
    });
  }
  res.send();
});

router.use((req, res, next) => {
  if (req.cookies.token) {
    res.cookie('id_token', req.cookies['id_token']);
    next();
  } else {
    res.status(401).send('401 Unauthorised');
  }
});

router.get('/user/:id', (req, res) => {
  res.json(db.getUser(req.params.id));
});

router.get('/team/:id/', (req, res) => {
  res.json(db.getTeam(req.params.id));
});

export default router;
