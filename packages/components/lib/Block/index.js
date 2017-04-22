// @flow

import React from 'react';
import classnames from 'classnames';
import Paper from 'material-ui/Paper';

type Props = {
  className?: string,
  children?: mixed,
  title?: string,
};

export default function Block({ children, className, title, ...props }: Props) {
  const classNames = classnames('Block', className);
  return (
    <Paper zDepth={1}>
      <div {...props} className={classNames}>
        {title ? <h1 className="Block__title">{title}</h1> : null}
        {children}
      </div>
    </Paper>
  );
}

Block.displayName = 'Block';
