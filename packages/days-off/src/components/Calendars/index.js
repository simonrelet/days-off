import React, { Component } from 'react';
import moment from 'moment';
import range from 'lodash/range';
import injectSheet from 'react-jss';
import Calendar from '../Calendar';
import styles from './styles';

class Calendars extends Component {
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
    const { onSelect, selection, classes } = this.props;
    const today = moment();
    const startfrom = moment(today).startOf('month');
    const firstMonth = moment(startfrom).add({ year: yearOffset });
    const firstDayOfMonths = range(12).reduce((acc, i) => {
      return [...acc, moment(firstMonth).add({ months: i })];
    }, []);
    const lastMonth = firstDayOfMonths[firstDayOfMonths.length - 1];

    return (
      <div className={classes.calendars}>
        <div className={classes.header}>
          <button
            className={classes.button}
            name="previous"
            onClick={this.handleOffsetYear}
          >
            &lt;
          </button>
          <button className={classes.button} onClick={this.handleOffsetYear}>
            &gt;
          </button>
          <span className={classes.date}>{firstMonth.format('MMMM YYYY')}</span>
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
