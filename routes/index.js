const express = require('express');
const path = require('path');
const db = require('../db');

const router = express.Router();

router.get('/user/:id', (req, res, next) => {
  res.json(db.getUser(req.params.id));
});

router.get('/team/:id/', (req, res, next) => {
  res.json(db.getTeam(req.params.id));
});

module.exports = router;
