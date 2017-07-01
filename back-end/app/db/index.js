// @flow
import fs from 'fs-extra';
import path from 'path';

type Credits = {
  rtt: number,
  dayedLeaves: number,
  sick: number,
};

type User = {
  firstname: string,
  lastname: string,
  teamId: string,
  credits: {
    total: Credits,
    used: Credits,
  },
};

type Team = {
  name: string,
  members: {
    userId: string,
    roleId: string,
  }[],
};

type Db = {
  roles: { [key: string]: string },
  creditsTypes: { [key: string]: string },
  users: { [key: string]: User },
  teams: { [key: string]: Team },
};

const db: Db = fs.readJsonSync(path.join(__dirname, 'db.json')) || {
  roles: {},
  creditsTypes: {},
  users: {},
  teams: {},
};

function getUser(userId: string): User {
  return db.users[userId];
}

function getTeam(teamId: string): Team {
  return db.teams[teamId];
}

export default {
  getUser,
  getTeam,
};
