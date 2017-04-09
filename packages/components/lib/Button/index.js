// @flow

import React from 'react';

type Props = { children?: any };

export default function Button({ children, ...props }: Props) {
  return (
    <button {...props} className="Button">
      {children}
    </button>
  );
}

Button.displayName = 'Button';
