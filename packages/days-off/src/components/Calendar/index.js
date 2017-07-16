import React, { Component } from 'react';
import moment from 'moment';
import range from 'lodash/range';
import View from './view';

const weekDays = moment.weekdaysMin(true).map(d => ({
  label: d.toUpperCase(),
}));

function getDays(firstDay) {
  return range(firstDay.daysInMonth()).map(i => {
    const d = moment(firstDay).date(i + 1);
    return { moment: d, label: d.format('DD') };
  });
}

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      year: '',
      days: [],
    };
  }

  componentWillMount() {
    this.updateCalendar();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.firstDay.isSame(this.props.firstDay, 'day')) {
      this.updateCalendar(nextProps);
    }
  }

  updateCalendar(props) {
    const { firstDay } = props || this.props;
    this.setState({
      month: firstDay.format('MMMM'),
      year: firstDay.format('YYYY'),
      days: getDays(firstDay),
    });
  }

  render() {
    const { onSelect, firstDay, className, today, selection } = this.props;
    const { days, month } = this.state;
    const year = firstDay.isSame(today, 'year') ? '' : this.state.year;
    return (
      <View
        className={className}
        days={days}
        month={month}
        year={year}
        today={today}
        selection={selection}
        weekDays={weekDays}
        onSelect={onSelect}
      />
    );
  }
}
