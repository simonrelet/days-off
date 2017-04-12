// @flow

import React from 'react';
import classnames from 'classnames';

type Props = {
  children?: mixed,
  small?: boolean,
};

export default function Button({ children, small, ...props }: Props) {
  const classNames = classnames('Button', 'Button--default', {
    'Button--small': small,
  });

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
}

Button.displayName = 'Button';
