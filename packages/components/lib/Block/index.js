// @flow

import React from 'react';

const CLASS_NAME = 'Block';

type Props = {
  className?: string,
  children?: any,
  title?: string,
};

export default function Block({ children, className, title, ...props }: Props) {
  const classNames = className ? `${CLASS_NAME} ${className}` : CLASS_NAME;
  return (
    <div {...props} className={classNames}>
      {title ? <h1 className="Block__title">{title}</h1> : null}
      {children}
    </div>
  );
}

Block.displayName = 'Block';
