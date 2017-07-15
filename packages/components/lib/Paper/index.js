import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import { depths, colors, transitionAll } from '../styles';

const styles = {
  paper: {
    background: { color: colors.white },
    border: { radius: '.2rem' },
    transition: transitionAll,
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
