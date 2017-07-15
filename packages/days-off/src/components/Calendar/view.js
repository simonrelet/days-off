import React from 'react';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import { calendar, weekDay, day, halfDay } from './styles';

const WeekDay = injectSheet(weekDay)(function({ classes, day, index }) {
  return (
    <div
      className={classes.weekDay}
      style={{
        gridColumn: `${index * 2 + 1}/${index * 2 + 3}`,
        gridRow: '1/2',
      }}
    >
      <span>
        {day.label}
      </span>
    </div>
  );
});

const Day = injectSheet(day)(function({
  classes,
  day,
  position: { row, column },
}) {
  return (
    <div
      className={classnames(classes.day, {
        [classes.disabled]: day.disabled,
        [classes.today]: day.today,
      })}
      style={{
        gridRow: `${row + 1}/${row + 2}`,
        gridColumn: `${column + 1}/${column + 3}`,
      }}
    >
      <span>
        {day.label}
      </span>
    </div>
  );
});

const HalfDay = injectSheet(halfDay)(function({
  classes,
  day,
  dayPart,
  onSelect,
  position: { row, column },
}) {
  return (
    <div
      className={classnames(classes.halfDay, {
        [classes.selected]: day.selection[dayPart],
      })}
      onClick={() =>
        onSelect({
          date: day.value.format('YYYY-MM-DD'),
          halfDay: dayPart,
        })}
      style={{
        gridRow: `${row + 1}/${row + 2}`,
        gridColumn: `${column + 1}/${column + 2}`,
      }}
    />
  );
});

function getItems(days) {
  let row = 1;
  return days.reduce((acc, day) => {
    const column = day.value.weekday() * 2;
    if (column === 0 && day.value.date() > 0) {
      row = row + 1;
    }

    return day.disabled
      ? [...acc, { day, position: { row, column } }]
      : [
          ...acc,
          { day, dayPart: 'morning', position: { row, column } },
          { day, dayPart: 'afternoon', position: { row, column: column + 1 } },
          { day, position: { row, column } },
        ];
  }, []);
}

function CalendarView({
  classes,
  className,
  days,
  month,
  year,
  weekDays,
  onSelect = () => {},
}) {
  const items = getItems(days);
  return (
    <div className={classnames(classes.calendar, className)}>
      <div className={classes.month}>
        {month} {year}
      </div>
      <div className={classes.grid}>
        {weekDays.map((day, i) => <WeekDay key={i} day={day} index={i} />)}
        {items.map(
          (item, i) =>
            item.dayPart
              ? <HalfDay key={i} {...item} onSelect={onSelect} />
              : <Day key={i} {...item} />,
        )}
      </div>
    </div>
  );
}

export default injectSheet(calendar)(CalendarView);
