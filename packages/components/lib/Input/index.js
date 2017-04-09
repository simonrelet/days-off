// @flow

import React from 'react';

type Props = {
  id: string,
  password?: boolean,
  onChange: Function,
};

export default function Input({ id, password, onChange, ...props }: Props) {
  const type = !!password ? 'password' : 'text';
  return (
    <input
      {...props}
      className="Input"
      id={id}
      type={type}
      onChange={e => onChange(e, id)}
    />
  );
}

Input.displayName = 'Input';
