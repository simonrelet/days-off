import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Calendars from '../Calendars';
import UserHeader from '../UserHeader';
import Menu from '../Menu';
import styles from './styles';

const app = {
  name: 'days-off',
  version: '0.1.0',
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstname: 'Simon',
        lastname: 'Relet',
      },
      selectedDays: {},
    };
  }

  handleSelect = (day, selection) => {
    console.log('selected:', day, 'selection:', selection);
    this.setState({
      selectedDays: {
        [day.value.format('YYYY-MM-DD')]: selection,
      },
    });
  };

  render() {
    const { user, selectedDays } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <div className={classes.menu}>
          <div className={classes.menuHeader}>
            <span>Days Off</span>
          </div>
          <Menu className={classes.menuContent} />
          <div className={classes.menuFooter}>
            {app.name}@{app.version}
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.bodyHeader}>
            <UserHeader {...user} />
          </div>
          <div className={classes.bodyContent}>
            <Calendars
              onSelect={this.handleSelect}
              selectedDays={selectedDays}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
