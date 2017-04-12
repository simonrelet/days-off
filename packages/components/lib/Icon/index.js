// @flow

import React from 'react';
import icons from './icons';

const CLASS_NAME = 'Icon';

type Props = {
  className?: string,
  left?: boolean,
  name: string,
};

export default function Icon({ className, left, name, ...props }: Props) {
  let classNames = className ? `${CLASS_NAME} ${className}` : CLASS_NAME;
  if (left) {
    classNames = `${classNames} ${CLASS_NAME}--left`;
  }
  return (
    <i {...props} className={classNames}>
      {icons[name]}
    </i>
  );
}

Icon.displayName = 'Icon';
