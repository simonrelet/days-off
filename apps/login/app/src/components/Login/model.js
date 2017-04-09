// @flow

import axios from 'axios';
import qs from 'qs';

const http = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

type Credentials = {
  password: string,
  username: string,
};

function login(credentials: Credentials): Promise<string> {
  return http
    .post('/login', qs.stringify(credentials))
    .then(({ data: { token } }) => Promise.resolve(token))
    .catch(({ response: { status, data: { message } } }) => {
      throw new Error(status >= 500 ? 'Could not connect to server' : message);
    });
}

export default {
  login,
};
