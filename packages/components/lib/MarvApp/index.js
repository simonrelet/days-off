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
    <div className="MarvApp">
      {header && <header className="MarvApp__header" />}
      {React.createElement(content, { className: 'MarvApp__content' })}
      <div className="MarvApp__footer">
        {app.name}@{app.version}
      </div>
    </div>
  );
}
