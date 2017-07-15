import React from 'react';
import moment from 'moment';
import range from 'lodash/range';
import View from './view';

function isHalfDayInRange(day, halfDay, selection) {
  const { start, end } = selection;
  const afterStart =
    day.isSameOrAfter(start.date, 'day') &&
    (start.halfDay === 'morning' || halfDay === 'afternoon');
  const beforeEnd =
    day.isSameOrBefore(end.date, 'day') &&
    (end.halfDay === 'afternoon' || halfDay === 'morning');

  return afterStart && beforeEnd;
}

function getDays(day, today, selection) {
  const days = range(day.daysInMonth()).reduce((acc, i) => {
    const d = moment(day).date(i + 1);
    const s = selection
      ? {
          morning: isHalfDayInRange(d, 'morning', selection),
          afternoon: isHalfDayInRange(d, 'afternoon', selection),
        }
      : {};
    return [
      ...acc,
      {
        value: d,
        label: d.format('DD'),
        today: d.isSame(today, 'day'),
        disabled: d.day() === 0 || d.day() === 6,
        selection: s,
      },
    ];
  }, []);

  return days;
}

function getWeekDays(day) {
  return moment.weekdaysMin(true).map(d => ({
    label: d.toUpperCase(),
  }));
}

export default function Calendar({
  firstDay,
  onSelect,
  today,
  selection,
  className,
}) {
  const days = getDays(firstDay, today, selection);
  const month = firstDay.format('MMMM');
  const year = firstDay.isSame(today, 'year') ? '' : firstDay.format('YYYY');
  const weekDays = getWeekDays(firstDay);
  return (
    <View
      className={className}
      days={days}
      month={month}
      year={year}
      weekDays={weekDays}
      onSelect={onSelect}
    />
  );
}
