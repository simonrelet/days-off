import React, { Component } from 'react';
import moment from 'moment';
import range from 'lodash/range';
import injectSheet from 'react-jss';
import Calendar from '../Calendar';
import styles from './styles';

const nbCalendarToDisplay = 12;

class Calendars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthOffset: 0,
    };
  }

  handleOffsetMonth = e => {
    if (e.target.name === 'previous') {
      this.setState(({ monthOffset }) => ({
        monthOffset: monthOffset - nbCalendarToDisplay,
      }));
    } else {
      this.setState(({ monthOffset }) => ({
        monthOffset: monthOffset + nbCalendarToDisplay,
      }));
    }
  };

  handleToday = () => {
    this.setState({ monthOffset: 0 });
  };

  render() {
    const { monthOffset } = this.state;
    const { onSelect, selection, classes } = this.props;
    const today = moment();
    const startfrom = moment(today).startOf('month');
    const firstMonth = moment(startfrom).add({ month: monthOffset });
    const firstDayOfMonths = range(nbCalendarToDisplay).reduce((acc, i) => {
      return [...acc, moment(firstMonth).add({ months: i })];
    }, []);
    const lastMonth = firstDayOfMonths[firstDayOfMonths.length - 1];
    const sameYear = firstMonth.isSame(lastMonth, 'year');

    return (
      <div className={classes.calendars}>
        <div className={classes.header}>
          <button
            className={classes.button}
            name="previous"
            onClick={this.handleOffsetMonth}
          >
            &lt;
          </button>
          <button className={classes.button} onClick={this.handleOffsetMonth}>
            &gt;
          </button>
          <span className={classes.date}>
            {firstMonth.format(sameYear ? 'MMMM' : 'MMMM YYYY')}
          </span>
          -
          <span className={classes.date}>{lastMonth.format('MMMM YYYY')}</span>
          <button className={classes.todayButton} onClick={this.handleToday}>
            {today.format('dddd D MMMM')}
          </button>
        </div>
        <div className={classes.content}>
          {firstDayOfMonths.map((firstDay, i) =>
            <Calendar
              className={classes.calendar}
              key={i}
              firstDay={firstDay}
              onSelect={onSelect}
              today={today}
              selection={selection}
            />,
          )}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Calendars);
