// @flow
import React from 'react';
import chunk from 'lodash/chunk';
import classnames from 'classnames';
import './style.css';

export type Day = {
  disabled?: boolean,
  selected?: ?{
    morning?: boolean,
    afternoon?: boolean,
  },
  today?: boolean,
  value?: number,
};

export type DaySelection = { morning?: boolean, afternoon?: boolean };

export type WeekDay = {
  value: string,
};

function DayBlock({
  day,
  onClick,
}: {
  day: Day,
  onClick: (Day, DaySelection) => void,
}) {
  if (day.disabled) {
    return (
      <div className={classnames('block', { today: day.today })}>
        {day.value ? <span>{day.value}</span> : null}
      </div>
    );
  }

  const { morning = false, afternoon = false } = day.selected || {};

  return (
    <div className="block-wrapper">
      <div
        className={classnames('block', 'day', {
          selected: !!day.selected,
          today: day.today,
        })}
      >
        {day.value ? <span>{day.value}</span> : null}
      </div>
      <div className="split">
        <span
          className={classnames('part', { selected: morning })}
          onClick={() => onClick(day, { morning: true })}
        />
        <span
          className={classnames('part', { selected: afternoon })}
          onClick={() => onClick(day, { afternoon: true })}
        />
      </div>
    </div>
  );
}

export default function CalendarView({
  days,
  month,
  weekDays,
  onSelect = () => {},
}: {
  days: Array<Day>,
  month: string,
  weekDays: Array<WeekDay>,
  onSelect: (Day, DaySelection) => void,
}) {
  return (
    <div className="Calendar">
      <div className="month">{month}</div>
      <div className="header">
        {weekDays.map((day, i) =>
          <div key={i} className="block">
            {day.value ? <span>{day.value}</span> : null}
          </div>,
        )}
      </div>

      {chunk(days, 7).map((days, i) =>
        <div key={i} className="week">
          {days.map((day, i) =>
            <DayBlock onClick={onSelect} key={i} day={day} />,
          )}
        </div>,
      )}
    </div>
  );
}
