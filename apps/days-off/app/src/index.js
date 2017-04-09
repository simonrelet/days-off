// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import auth from '@days-off/common/auth';
import screman from '@days-off/common/screman';
import App from '@days-off/components/App';
import Root from './components/Root';
import '@days-off/components/style.css';

screman.init('days-off');
auth.ensureLoggedIn();

ReactDOM.render(
  <App version="0.1.0">
    <Root />
  </App>,
  document.getElementById('root'),
);
