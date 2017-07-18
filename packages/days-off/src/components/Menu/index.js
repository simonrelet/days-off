import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import { menuStyles, itemStyles } from './styles';

const menuItemStyles = injectSheet(itemStyles);

const Credits = menuItemStyles(({ classes, user: { credits } }) => {
  return (
    <div className={classes.item}>
      <div className={classes.title}>Credits</div>
      <div className={classes.line}>
        <div className={classes.label}>Paid leaves</div>
        <div className={classes.value}>
          {credits.used.payedLeaves}
        </div>
        <div className={classes.valueRef}>
          / {credits.total.payedLeaves}
        </div>
      </div>
      <div className={classes.line}>
        <div className={classes.label}>RTT</div>
        <div className={classes.value}>
          {credits.used.rtt}
        </div>
        <div className={classes.valueRef}>
          / {credits.total.rtt}
        </div>
      </div>
      <div className={classnames(classes.line, classes.lineTotal)}>
        <div className={classes.label}>Total</div>
        <div className={classes.value}>
          {credits.used.payedLeaves + credits.used.rtt}
        </div>
        <div className={classes.valueRef}>
          / {credits.total.payedLeaves + credits.total.rtt}
        </div>
      </div>
    </div>
  );
});

const RangeSelection = ({ classes, start, end }) => {
  const startLabel =
    start.moment.format('DD MMMM YYYY') + ' ' + start.halfDay.toUpperCase();
  const endLabel =
    end.moment.format('DD MMMM YYYY') + ' ' + end.halfDay.toUpperCase();

  return (
    <div>
      <div className={classes.line}>
        <div className={classes.label}>From</div>
        <div className={classes.value}>
          {startLabel}
        </div>
      </div>
      <div className={classes.line}>
        <div className={classes.label}>To</div>
        <div className={classes.value}>
          {endLabel}
        </div>
      </div>
    </div>
  );
};

const SameDaySelection = ({ classes, start, end }) => {
  let date = start.moment.format('DD MMMM YYYY');
  if (start.halfDay === end.halfDay) {
    date += ' ' + start.halfDay.toUpperCase();
  }
  return (
    <div>
      <div className={classes.line}>
        <div className={classes.label}>Date</div>
        <div className={classes.value}>
          {date}
        </div>
      </div>
    </div>
  );
};

const CurrentSelection = menuItemStyles(
  ({
    classes,
    selection: { start, end },
    user: { credits },
    onCancelSelection,
  }) => {
    const SelectionComponent = start.moment.isSame(end.moment, 'day')
      ? SameDaySelection
      : RangeSelection;

    return (
      <div className={classes.item}>
        <div className={classes.title}>
          Current Selection
          <div className={classes.titleToolbar}>
            <button onClick={onCancelSelection} className={classes.titleButton}>
              x
            </button>
          </div>
        </div>
        <SelectionComponent classes={classes} start={start} end={end} />
      </div>
    );
  },
);

function Menu({ className, classes, selection, user, onCancelSelection }) {
  return (
    <div className={classnames(classes.menu, className)}>
      {user && <Credits user={user} />}
      {selection &&
        user &&
        <CurrentSelection
          selection={selection}
          user={user}
          onCancelSelection={onCancelSelection}
        />}
    </div>
  );
}

export default injectSheet(menuStyles)(Menu);
