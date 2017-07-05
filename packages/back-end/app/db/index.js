import fs from 'fs-extra';
import path from 'path';

const db = fs.readJsonSync(path.join(__dirname, 'db.json')) || {
  roles: {},
  creditsTypes: {},
  users: {},
  teams: {},
};

function getUser(userId) {
  return db.users[userId];
}

function getTeam(teamId) {
  return db.teams[teamId];
}

export default {
  getUser,
  getTeam,
};
