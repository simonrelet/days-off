// @flow

import React from 'react';
import auth from '@days-off/common/auth';
import FlatButton from 'material-ui/FlatButton';
import Button from '../Button';
import Icon from '../Icon';
import Layout from '../Layout';

type Props = {
  app: { icon: string, name: string },
  username: string,
};

export default function Header({ app, username }: Props) {
  return (
    <Layout alignment="baseline" packing="space-between" className="Header">
      <div className="Header__appName">
        <Icon left name={app.icon} />{app.name}
      </div>
      <Layout alignment="baseline" className="Header__right">
        <div><Icon left name="user" />{username}</div>
        <FlatButton
          icon={<Icon left name="logout" />}
          label="Log out"
          onClick={() => auth.logout()}
        />
      </Layout>
    </Layout>
  );
}

Header.displayName = 'Header';
