// @flow

import React from 'react';

type Props = {
  children?: any,
  version: string,
};

export default function App({ children, version }: Props) {
  return (
    <div className="App">
      {children}
      <div className="App__footer">{version}</div>
    </div>
  );
}

App.displayName = 'App';
