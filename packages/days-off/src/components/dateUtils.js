export const halfDayKeys = {
  morning: 'am',
  afternoon: 'pm',
};

export function isHalfDayInRange(day, selection) {
  if (selection) {
    const { start, end } = selection;
    const afterStart = isHalfDayAfter(day, start);
    const beforeEnd = isHalfDayBefore(day, end);
    return afterStart && beforeEnd;
  }

  return false;
}

export function isHalfDayBefore(day, otherDay) {
  return (
    day.moment.isBefore(otherDay.moment, 'day') ||
    (day.moment.isSame(otherDay.moment, 'day') &&
      (otherDay.halfDay === halfDayKeys.afternoon ||
        day.halfDay === halfDayKeys.morning))
  );
}

export function isHalfDayAfter(day, otherDay) {
  return (
    day.moment.isAfter(otherDay.moment, 'day') ||
    (day.moment.isSame(otherDay.moment, 'day') &&
      (otherDay.halfDay === halfDayKeys.morning ||
        day.halfDay === halfDayKeys.afternoon))
  );
}
