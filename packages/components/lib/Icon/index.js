// @flow

import React from 'react';
import icons from './icons';

const CLASS_NAME = 'Icon';

type Props = {
  className?: string,
  name: string,
};

export default function Icon({ className, name, ...props }: Props) {
  const classNames = className ? `${CLASS_NAME} ${className}` : CLASS_NAME;
  return (
    <i {...props} className={classNames}>
      {icons[name]}
    </i>
  );
}

Icon.displayName = 'Icon';
