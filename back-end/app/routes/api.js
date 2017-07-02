// @flow
import express from 'express';
import db from '../db';

const router: any = express.Router();

router.get('/user/:id', (req, res, next) => {
  res.json(db.getUser(req.params.id));
});

router.get('/team/:id/', (req, res, next) => {
  res.json(db.getTeam(req.params.id));
});

export default router;
