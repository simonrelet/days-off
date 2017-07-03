// @flow
import React from 'react';

type Props = {
  firstname: string,
  lastname: string,
};

export default function({ firstname, lastname }: Props) {
  return (
    <div>
      {firstname} {lastname}
    </div>
  );
}
