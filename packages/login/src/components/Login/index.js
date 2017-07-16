import React, { Component } from 'react';
import qs from 'qs';
import fetch, { handleError } from '@marv/components/fetch';
import View from './View';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state),
    })
      .then(() => {
        const next =
          qs.parse(window.location.search.substring(1)).next || 'days-off';
        window.location.assign(window.location.origin + '/' + next);
      })
      .catch(handleError);
  };

  render() {
    const { username, password } = this.state;
    return (
      <View
        username={username}
        password={password}
        onChange={this.handleChange}
        onLogin={this.handleSubmit}
      />
    );
  }
}
