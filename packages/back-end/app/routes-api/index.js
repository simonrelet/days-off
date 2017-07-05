import express from 'express';
import db from '../db';

const router = express.Router();

function ensureLoggedIn(req, res, next) {
  if (req.cookies['id_token']) {
    res.cookie('id_token', req.cookies['id_token']);
    next();
  } else {
    res.status(401).send('401 Unauthorised');
  }
}

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

router.get('/user', ensureLoggedIn, (req, res) => {
  const token = req.cookies['id_token'];
  res.json(db.getUser(token.replace(/^TOKEN-FOR-/, '')));
});

router.get('/team/:id/', ensureLoggedIn, (req, res) => {
  res.json(db.getTeam(req.params.id));
});

export default router;
