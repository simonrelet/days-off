import React from 'react';
import classnames from 'classnames';

export default function Paper({ children, className, zDepth = 1 }) {
  const classNames = classnames('Paper', `Paper--${zDepth}`, className);
  return (
    <div className={classNames}>
      {children}
    </div>
  );
}
