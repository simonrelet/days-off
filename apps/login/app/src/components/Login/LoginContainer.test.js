// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import LoginContainer from './LoginContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginContainer />, div);
});
