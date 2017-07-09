import React, { Component } from 'react';
import moment from 'moment';
import range from 'lodash/range';
import Calendar from '../Calendar';
import './style.css';

export default class Calendars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearOffset: 0,
    };
  }

  handleOffsetYear = e => {
    if (e.target.name === 'previous') {
      this.setState(({ yearOffset }) => ({ yearOffset: yearOffset - 1 }));
    } else {
      this.setState(({ yearOffset }) => ({ yearOffset: yearOffset + 1 }));
    }
  };

  handleToday = () => {
    this.setState({ yearOffset: 0 });
  };

  render() {
    const { yearOffset } = this.state;
    const { onSelect, selectedDays } = this.props;
    const today = moment('2017-07-10');
    const startfrom = moment(today).startOf('month');
    const firstMonth = moment(startfrom).add({ year: yearOffset });
    const days = range(12).reduce((acc, i) => {
      return [...acc, moment(firstMonth).add({ months: i })];
    }, []);
    const lastMonth = days[days.length - 1];

    return (
      <div className="Calendars">
        <div className="Calendars__header">
          <button
            className="Calendars__button"
            name="previous"
            onClick={this.handleOffsetYear}
          >
            &lt;
          </button>
          <span className="Calendars__date">
            {firstMonth.format('MMMM YYYY')}
          </span>
          <button
            className="Calendars__button Calendars__button--today"
            onClick={this.handleToday}
          >
            {today.format('dddd D MMMM')}
          </button>
          <span className="Calendars__date">
            {lastMonth.format('MMMM YYYY')}
          </span>
          <button className="Calendars__button" onClick={this.handleOffsetYear}>
            &gt;
          </button>
        </div>
        <div className="Calendars__content">
          {days.map((d, i) =>
            <Calendar
              key={i}
              day={d}
              onSelect={onSelect}
              today={today}
              selectedDays={selectedDays}
            />,
          )}
        </div>
      </div>
    );
  }
}
