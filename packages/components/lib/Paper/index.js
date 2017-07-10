import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import color from 'color';

function alpha(a) {
  return color().alpha(a).string();
}

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

  depth1: {
    boxShadow: [
      { y: 1, blur: 6, color: alpha(0.12) },
      { y: 1, blur: 4, color: alpha(0.12) },
    ],
  },

  depth2: {
    boxShadow: [
      { y: 3, blur: 10, color: alpha(0.16) },
      { y: 3, blur: 10, color: alpha(0.23) },
    ],
  },

  depth3: {
    boxShadow: [
      { y: 10, blur: 30, color: alpha(0.19) },
      { y: 6, blur: 10, color: alpha(0.23) },
    ],
  },

  depth4: {
    boxShadow: [
      { y: 14, blur: 45, color: alpha(0.25) },
      { y: 10, blur: 18, color: alpha(0.22) },
    ],
  },

  depth5: {
    boxShadow: [
      { y: 19, blur: 60, color: alpha(0.3) },
      { y: 15, blur: 20, color: alpha(0.22) },
    ],
  },
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
