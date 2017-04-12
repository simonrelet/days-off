// @flow

import React from 'react';
import Block from '@days-off/components/Block';
import Button from '@days-off/components/Button';
import Input from '@days-off/components/Input';
import Layout from '@days-off/components/Layout';
import Message from '@days-off/components/Message';
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
    <Layout alignment="center" packing="middle">
      <Block className="Login__block" title="Login">
        <form onSubmit={onSubmit}>
          <Layout
            alignment="stretch"
            className="Login__layout"
            direction="vertical"
          >
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
          </Layout>
        </form>
      </Block>
    </Layout>
  );
}

LoginView.displayName = 'LoginView';
