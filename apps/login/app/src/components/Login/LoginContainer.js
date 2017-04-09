// @flow

import React, { Component } from 'react';
import screman from '@days-off/app-utils/build/screman';
import auth from '@days-off/app-utils/build/auth';
import model from './model';
import LoginView from './LoginView';

export default class LoginContainer extends Component {
  state: {
    errorMessage: string,
    password: string,
    username: string,
  };

  handleChange = (event: SyntheticInputEvent, inputName: string) => {
    const newValue: string = event.target.value;
    this.setState(() => ({ [inputName]: newValue, errorMessage: '' }));
  };

  handleSubmit = (event: Event) => {
    event.preventDefault();
    if (this.canSubmit()) {
      const { username, password } = this.state;

      model
        .login({ username, password })
        .then(token => {
          auth.login({ username, token, redirectAppId: this.getCaller() });
        })
        .catch(({ message }) => {
          this.setState(() => ({ errorMessage: message }));
        });
    }
  };

  constructor() {
    super();
    this.state = {
      errorMessage: '',
      password: '',
      username: '',
    };
  }

  componentDidMount() {
    screman.init('login');
    auth.ensureNotLoggedIn(this.getCaller());
  }

  canSubmit() {
    const { username, password } = this.state;
    return !!username && !!password;
  }

  getCaller() {
    return screman.getCaller() || 'navigation';
  }

  render() {
    return (
      <LoginView
        {...this.state}
        canSubmit={this.canSubmit()}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
