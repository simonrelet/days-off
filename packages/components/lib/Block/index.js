// @flow

import React from 'react';
import classnames from 'classnames';

type Props = {
  className?: string,
  children?: mixed,
  title?: string,
};

export default function Block({ children, className, title, ...props }: Props) {
  const classNames = classnames('Block', className);
  return (
    <div {...props} className={classNames}>
      {title ? <h1 className="Block__title">{title}</h1> : null}
      {children}
    </div>
  );
}

Block.displayName = 'Block';
