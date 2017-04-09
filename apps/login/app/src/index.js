// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import auth from '@days-off/common/auth';
import screman from '@days-off/common/screman';
import App from '@days-off/components/App';
import Login from './components/Login';
import '@days-off/components/style.css';

screman.init('login');
const caller = screman.getCaller() || 'navigation';
auth.ensureNotLoggedIn(caller);

ReactDOM.render(
  <App version="0.1.0">
    <Login caller={caller} />
  </App>,
  document.getElementById('root'),
);
