import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import { menuStyles, itemStyles } from './styles';

const Credits = injectSheet(itemStyles)(function({ title, classes }) {
  return (
    <div className={classes.item}>
      <div className={classes.title}>
        {title}
      </div>
      <div className={classes.line}>
        <div className={classes.label}>Paid leaves</div>
        <div className={classes.value}>5.0</div>
        <div className={classes.valueRef}>/ 25.0</div>
      </div>
      <div className={classes.line}>
        <div className={classes.label}>RTT</div>
        <div className={classes.value}>2.0</div>
        <div className={classes.valueRef}>/ 10.0</div>
      </div>
      <div className={classnames(classes.line, classes.lineTotal)}>
        <div className={classes.label}>Total</div>
        <div className={classes.value}>7.0</div>
        <div className={classes.valueRef}>/ 35.0</div>
      </div>
    </div>
  );
});

function Menu({ className, classes }) {
  return (
    <div className={classnames(classes.menu, className)}>
      <Credits title="Credits" />
      <Credits title="Current selection" />
    </div>
  );
}

export default injectSheet(menuStyles)(Menu);
