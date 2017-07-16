import React from 'react';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import { calendar, weekDay, day, halfDay } from './styles';
import { isHalfDayInRange, halfDayKeys } from '../dateUtils';

const WeekDay = injectSheet(weekDay)(function({ classes, label, index }) {
  return (
    <div
      className={classes.weekDay}
      style={{
        gridColumn: `${index * 2 + 1}/${index * 2 + 3}`,
        gridRow: '1/2',
      }}
    >
      <span>
        {label}
      </span>
    </div>
  );
});

const Day = injectSheet(day)(function({
  classes,
  day,
  today,
  disabled,
  position: { row, column },
}) {
  return (
    <div
      className={classnames(classes.day, {
        [classes.disabled]: disabled,
        [classes.today]: day.moment.isSame(today, 'day'),
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
  halfDay,
  onSelect,
  selection,
  position: { row, column },
}) {
  return (
    <div
      className={classnames(classes.halfDay, {
        [classes.selected]: isHalfDayInRange(
          { moment: day.moment, halfDay },
          selection,
        ),
      })}
      onClick={e =>
        onSelect({ moment: day.moment, halfDay }, e.shiftKey || e.metaKey)}
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
    const column = day.moment.weekday() * 2;
    if (column === 0 && day.moment.date() > 0) {
      row = row + 1;
    }
    const disabled = day.moment.day() === 0 || day.moment.day() === 6;
    return disabled
      ? [...acc, { day, disabled, position: { row, column } }]
      : [
          ...acc,
          { day, halfDay: halfDayKeys.morning, position: { row, column } },
          {
            day,
            halfDay: halfDayKeys.afternoon,
            position: { row, column: column + 1 },
          },
          { day, position: { row, column } },
        ];
  }, []);
}

function CalendarView({
  classes,
  className,
  days,
  month,
  today,
  selection,
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
        {weekDays.map((day, i) =>
          <WeekDay key={i} label={day.label} index={i} />,
        )}
        {items.map(
          (item, i) =>
            item.halfDay
              ? <HalfDay
                  key={i}
                  {...item}
                  onSelect={onSelect}
                  selection={selection}
                />
              : <Day key={i} {...item} today={today} />,
        )}
      </div>
    </div>
  );
}

export default injectSheet(calendar)(CalendarView);
