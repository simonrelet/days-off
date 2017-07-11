import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import { depths } from '../styles';

const styles = {
  paper: {
    background: { color: '#fff' },
    border: { radius: '.2rem' },
    transition: {
      property: 'all',
      duration: 450,
      timingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
    },
  },

  depth1: depths.level1,
  depth2: depths.level2,
  depth3: depths.level3,
  depth4: depths.level4,
  depth5: depths.level5,
};

function Paper({ children, className, classes, zDepth = 1 }) {
  const classNames = classnames(
    classes.paper,
    classes[`depth${zDepth}`],
    className,
  );
  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

export default injectSheet(styles)(Paper);
