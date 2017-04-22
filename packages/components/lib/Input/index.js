// @flow

import React from 'react';
import TextField from 'material-ui/TextField';

type Props = {
  id: string,
  password?: boolean,
  onChange: Function,
};

export default function Input({ id, password, onChange, ...props }: Props) {
  const type = !!password ? 'password' : 'text';
  return (
    <TextField {...props} id={id} type={type} onChange={e => onChange(e, id)} />
  );
}

Input.displayName = 'Input';
