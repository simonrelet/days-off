import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Icon from '@marv/components/Icon';
import fetch, { parseJSON, handleError } from '@marv/components/fetch';
import { isHalfDayBefore, isHalfDayAfter } from '../dateUtils';
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
      user: null,
      selection: null,
    };
  }

  componentDidMount() {
    fetch('/api/user')
      .then(parseJSON)
      .then(res => {
        this.setState({ user: res });
      })
      .catch(handleError);
  }

  handleSelect = (selection, selectionBlock) => {
    console.log('selection:', selection);
    this.setState(prevState => {
      if (!prevState.selection || !selectionBlock) {
        return {
          selection: {
            start: selection,
            end: selection,
          },
        };
      }

      if (isHalfDayBefore(selection, prevState.selection.start)) {
        return {
          selection: {
            start: selection,
            end: prevState.selection.end,
          },
        };
      }

      if (isHalfDayAfter(selection, prevState.selection.end)) {
        return {
          selection: {
            start: prevState.selection.start,
            end: selection,
          },
        };
      }
    });
  };

  handleCancelSelection = () => {
    this.setState({ selection: null });
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.handleCancelSelection();
    }
  };

  render() {
    const { user, selection } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.app} onKeyDown={this.handleKeyDown} tabIndex={1}>
        <div className={classes.menu}>
          <div className={classes.menuHeader}>
            <Icon name="days-off" className={classes.icon} />
            <span>Days Off</span>
          </div>
          <Menu
            className={classes.menuContent}
            selection={selection}
            onCancelSelection={this.handleCancelSelection}
            user={user}
          />
          <div className={classes.menuFooter}>
            {app.version}
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.bodyHeader}>
            {user && <UserHeader {...user} />}
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
