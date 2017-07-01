// @flow
import React, { Component } from 'react';
import View from './view';
import type { Day, DaySelection, WeekDay } from './view';

const days: Array<Day> = [];

let i;
for (i = 6; i > 0; i--) {
  days.push({ disabled: true });
}

for (i = 0; i < 31; i++) {
  const disabled = i % 7 === 0 || (i + 1) % 7 === 0;
  const selected = i >= 12 && i <= 20;
  const today = i === 20;
  const value = i + 1;
  days.push({
    value,
    selected: selected ? { morning: true, afternoon: true } : null,
    today,
    disabled,
  });
}

for (i = 0; i < 5; i++) {
  days.push({ disabled: true });
}

const weekDays: Array<WeekDay> = [
  { value: 'MO' },
  { value: 'TU' },
  { value: 'WE' },
  { value: 'TH' },
  { value: 'FR' },
  { value: 'SA', weekend: true },
  { value: 'SU', weekend: true },
];

export default class Calendar extends Component {
  handleSelect(day: Day, selection: DaySelection) {
    console.log('selected:', day, 'selection:', selection);
  }

  render() {
    return (
      <View
        days={days}
        month="June"
        weekDays={weekDays}
        onSelect={this.handleSelect}
      />
    );
  }
}
