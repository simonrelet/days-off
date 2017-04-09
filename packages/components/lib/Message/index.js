// @flow

import React from 'react';
import Icon from '../Icon';

type Props = {
  children?: any,
  type: string,
};

export default function Message({ children, type }: Props) {
  const classNames = `Message Message--${type}`;
  return (
    <div className={classNames}>
      <Icon className="Message__icon" name={type} />
      {children}
    </div>
  );
}

Message.displayName = 'Message';
