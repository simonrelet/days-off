const fs = require('fs-extra');
const path = require('path');

const db = fs.readJsonSync(path.join(__dirname, 'db.json')) || {};

function getUser(userId) {
  return db.users[userId];
}

function getTeam(teamId) {
  return db.teams[teamId];
}

module.exports = {
  getUser,
  getTeam,
};
