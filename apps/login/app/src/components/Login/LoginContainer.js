// @flow

import React, { Component } from 'react';
import auth from '@days-off/common/auth';
import model from './model';
import LoginView from './LoginView';

export default class LoginContainer extends Component {
  props: {
    caller: string,
  };

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
          auth.login({ username, token, redirectAppId: this.props.caller });
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

  canSubmit() {
    const { username, password } = this.state;
    return !!username && !!password;
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
