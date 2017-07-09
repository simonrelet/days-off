import React from 'react';
import moment from 'moment';
import range from 'lodash/range';
import View from './view';

function getDays(day, today, selectedDays) {
  const days = range(day.daysInMonth()).reduce((acc, i) => {
    const d = moment(day).date(i + 1);
    const selection = selectedDays[d.format('YYYY-MM-DD')] || {};
    return [
      ...acc,
      {
        value: d,
        label: d.format('DD'),
        today: d.isSame(today, 'day'),
        disabled: d.day() === 0 || d.day() === 6,
        selection: {
          morning: !!selection.morning,
          afternoon: !!selection.afternoon,
        },
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

export default function Calendar({ day, onSelect, today, selectedDays }) {
  const days = getDays(day, today, selectedDays);
  const month = day.format('MMMM');
  const year = day.isSame(today, 'year') ? '' : day.format('YYYY');
  const weekDays = getWeekDays(day);
  return (
    <View
      days={days}
      month={month}
      year={year}
      weekDays={weekDays}
      onSelect={onSelect}
    />
  );
}
