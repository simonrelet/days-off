// @flow

import React from 'react';
import App from '@days-off/components/build/App';
import Block from '@days-off/components/build/Block';
import Button from '@days-off/components/build/Button';
import Input from '@days-off/components/build/Input';
import Message from '@days-off/components/build/Message';
import './index.css';

type Props = {
  canSubmit: boolean,
  errorMessage: string,
  password: string,
  username: string,
  onChange: Function,
  onSubmit: Function,
};

export default function LoginView(props: Props) {
  const {
    canSubmit,
    errorMessage,
    password,
    username,
    onChange,
    onSubmit,
  } = props;

  return (
    <App version="0.1.0">
      <div className="Login">
        <Block className="Login__block" title="Login">
          <form className="Login__layout" onSubmit={onSubmit}>
            <Input
              autoFocus
              id="username"
              placeholder="Username"
              value={username}
              onChange={onChange}
            />
            <Input
              password
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
            <Button disabled={!canSubmit}>Submit</Button>
            {errorMessage
              ? <Message type="error">{errorMessage}</Message>
              : null}
          </form>
        </Block>
      </div>
    </App>
  );
}

LoginView.displayName = 'LoginView';
