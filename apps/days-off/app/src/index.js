// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import auth from '@days-off/common/auth';
import screman from '@days-off/common/screman';
import App from '@days-off/components/App';
import Root from './components/Root';
import '@days-off/components/style.css';

injectTapEventPlugin();
screman.init('days-off');
auth.ensureLoggedIn();

const app = {
  icon: 'calendar',
  name: 'Days off',
};

ReactDOM.render(
  <App app={app} version="0.1.0">
    <Root />
  </App>,
  document.getElementById('root'),
);
