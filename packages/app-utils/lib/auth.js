// @flow

import screman from './screman';

const loginScreenId = 'login';

function getToken() {
  return window.localStorage.getItem('token');
}

type LoginOptions = {
  token: string,
  redirectAppId: string,
  username: string,
};

function login({ token, username, redirectAppId }: LoginOptions): void {
  window.localStorage.setItem('token', token);
  window.localStorage.setItem('username', username);
  window.location = screman.createOpenLink({ appId: redirectAppId });
}

function ensureLoggedIn(): void {
  if (!getToken()) {
    window.location = screman.createOpenLinkWithResult({
      appId: loginScreenId,
    });
  }
}

function ensureNotLoggedIn(redirect: string): void {
  if (getToken()) {
    window.location = screman.createOpenLink({ appId: redirect });
  }
}

function logout(): void {
  window.localStorage.removeItem('token');
  window.location = screman.createOpenLink({ appId: loginScreenId });
}

function getUserName(): string {
  return window.localStorage.getItem('username');
}

let auth = {
  ensureLoggedIn,
  ensureNotLoggedIn,
  getUserName,
  login,
  logout,
};

if (process.env.NODE_ENV === 'development') {
  const prefix = '[auth][development]';
  const warn = (...args) => console.warn(prefix, ...args);
  const info = (...args) => console.warn(prefix, ...args);

  warn('Running in development mode, all call will be ignored');

  auth = {
    ensureLoggedIn: (): void => {
      info("Called 'ensureLoggedIn'");
    },
    ensureNotLoggedIn: (redirect: string): void => {
      info(`Called 'ensureNotLoggedIn' with redirect='${redirect}'`);
    },
    getUserName: (): string => {
      info("Called 'getUserName', returning 'Simon'");
      return 'Simon';
    },
    login: (options: LoginOptions): void => {
      info("Called 'login' with options:", options);
    },
    logout: (): void => {
      info("Called 'logout'");
    },
  };
}

export default auth;
