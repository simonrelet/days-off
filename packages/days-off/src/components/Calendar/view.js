import React, { Component } from 'react';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import styles from './styles';
import { isHalfDayInRange, halfDayKeys } from '../dateUtils';

function getHalfDay(e) {
  const boundingRect = e.target.getBoundingClientRect();
  const left = e.clientX - Math.floor(boundingRect.left);
  return left < styles.tileSize / 2
    ? halfDayKeys.morning
    : halfDayKeys.afternoon;
}

function getItems(days) {
  let row = 1;
  return days.map(day => {
    const column = day.moment.weekday();
    if (column === 0 && day.moment.date() > 1) {
      row = row + 1;
    }
    const disabled = day.moment.day() === 0 || day.moment.day() === 6;
    return { day, disabled, position: { row, column } };
  });
}

const WeekDay = injectSheet(styles.weekDay)(function({
  classes,
  label,
  index,
}) {
  return (
    <div
      className={classes.weekDay}
      style={{
        gridColumn: `${index + 1}/${index + 2}`,
        gridRow: '1/2',
      }}
    >
      <span>
        {label}
      </span>
    </div>
  );
});

const Day = injectSheet(styles.day)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { hover: '' };
    }

    handleMouseMove = e => {
      this.setState({ hover: getHalfDay(e) });
    };

    handleSelectDay = e => {
      const { day, onSelect } = this.props;
      onSelect(
        { moment: day.moment, halfDay: getHalfDay(e) },
        e.shiftKey || e.metaKey,
      );
    };

    handleMouseLeave = () => {
      this.setState({ hover: '' });
    };

    getHalfDayColor = halfDay => {
      const { day, selection } = this.props;
      const { hover } = this.state;
      const selected = isHalfDayInRange(
        { moment: day.moment, halfDay },
        selection,
      );
      return styles.getHalfDayColor(selected, hover === halfDay);
    };

    render() {
      const {
        classes,
        day,
        today,
        disabled,
        position: { row, column },
      } = this.props;

      let handlers = {};
      let boxShadow = '';
      if (!disabled) {
        handlers = {
          onClick: this.handleSelectDay,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
        };
        boxShadow =
          `inset ${styles.tileSizeREM /
            2}rem 0px 0px 0px ${this.getHalfDayColor(halfDayKeys.morning)},` +
          `inset -${styles.tileSizeREM /
            2}rem 0px 0px 0px ${this.getHalfDayColor(halfDayKeys.afternoon)}`;
      }

      return (
        <div
          {...handlers}
          className={classnames(classes.day, {
            [classes.disabled]: disabled,
            [classes.today]: day.moment.isSame(today, 'day'),
          })}
          style={{
            gridRow: `${row + 1}/${row + 2}`,
            gridColumn: `${column + 1}/${column + 2}`,
            boxShadow,
          }}
        >
          {day.label}
        </div>
      );
    }
  },
);

export default injectSheet(styles.calendar)(
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { items: null };
    }

    componentWillMount() {
      this.updateItems(this.props);
    }

    componentWillReceiveProps(nextProps) {
      // eslint-disable-next-line eqeqeq
      if (nextProps.days != this.props.days) {
        this.updateItems(nextProps);
      }
    }

    updateItems({ days }) {
      this.setState({ items: getItems(days) });
    }

    render() {
      const {
        classes,
        className,
        month,
        today,
        selection,
        year,
        weekDays,
        onSelect,
      } = this.props;
      return (
        <div className={classnames(classes.calendar, className)}>
          <div className={classes.month}>
            {month} {year}
          </div>
          <div className={classes.grid}>
            {weekDays.map((day, i) =>
              <WeekDay key={i} label={day.label} index={i} />,
            )}
            {this.state.items.map(item =>
              <Day
                {...item}
                selection={selection}
                onSelect={onSelect}
                key={item.day.moment.date()}
                today={today}
              />,
            )}
          </div>
        </div>
      );
    }
  },
);
