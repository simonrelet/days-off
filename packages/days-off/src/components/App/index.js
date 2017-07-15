import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Icon from '@marv/components/Icon';
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
      selection: null,
    };
  }

  handleSelect = selection => {
    console.log('selection:', selection);
    this.setState(prevState => ({
      selection: {
        start: { ...selection },
        end: { ...selection },
      },
    }));
  };

  render() {
    const { user, selection } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <div className={classes.menu}>
          <div className={classes.menuHeader}>
            <Icon name="days-off" className={classes.icon} />
            <span>Days Off</span>
          </div>
          <Menu className={classes.menuContent} />
          <div className={classes.menuFooter}>
            {app.version}
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.bodyHeader}>
            <UserHeader {...user} />
          </div>
          <div className={classes.bodyContent}>
            <Calendars onSelect={this.handleSelect} selection={selection} />
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
