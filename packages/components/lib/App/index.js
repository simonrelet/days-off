// @flow

import React from 'react';
import auth from '@days-off/common/auth';
import Header from '../Header';
import Layout, { LayoutItem } from '../Layout';

type Props = {
  app?: { icon: string, name: string },
  children?: mixed,
  version: string,
};

export default function App({ app, children, version }: Props) {
  const username = auth.getUserName();
  return (
    <Layout direction="vertical" className="App">
      {app ? <Header app={app} username={username} /> : null}
      <LayoutItem weight={1}>
        {children}
      </LayoutItem>
      <div className="App__footer">{version}</div>
    </Layout>
  );
}

App.displayName = 'App';
