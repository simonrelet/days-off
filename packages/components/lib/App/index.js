// @flow
import React from 'react';

type Props = {
  app: {
    name: string,
    version: string,
  },
  content: any,
  header?: any,
};

export default function({ header, content, app }: Props) {
  return (
    <div className="App">
      {header && <header className="App__header" />}
      <content className="App__content" />
      <div className="App__footer">
        {app.name}@{app.version}
      </div>
    </div>
  );
}
