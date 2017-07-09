import React from 'react';
import classnames from 'classnames';
import './style.css';

function WeekDay({ day, index }) {
  return (
    <div
      className="Calendar__tile Calendar__tile--header"
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
}

function Day({ day, position: { row, column } }) {
  return (
    <div
      className={classnames('Calendar__tile', 'Calendar__day', {
        'Calendar__day--disabled': day.disabled,
        'Calendar__day--today': day.today,
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
}

function HalfDay({ day, dayPart, onSelect, position: { row, column } }) {
  return (
    <div
      className={classnames('Calendar__tile', 'Calendar__tile--button', {
        'Calendar__tile--button-selected': day.selection[dayPart],
      })}
      onClick={() => onSelect(day, { [dayPart]: true })}
      style={{
        gridRow: `${row + 1}/${row + 2}`,
        gridColumn: `${column + 1}/${column + 2}`,
      }}
    />
  );
}

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

export default function CalendarView({
  days,
  month,
  year,
  weekDays,
  onSelect = () => {},
}) {
  const items = getItems(days);
  return (
    <div className="Calendar">
      <div className="Calendar__month">
        {month} {year}
      </div>
      <div className="Calendar__grid">
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
