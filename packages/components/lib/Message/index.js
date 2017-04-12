// @flow

import React from 'react';
import Icon from '../Icon';

type Props = {
  children?: mixed,
  type: string,
};

export default function Message({ children, type }: Props) {
  const classNames = `Message Message--${type}`;
  return (
    <div className={classNames}>
      <Icon left name={type} />
      {children}
    </div>
  );
}

Message.displayName = 'Message';
