import React, { Component } from 'react';
import Calendars from './components/Calendars';
import UserHeader from './components/UserHeader';
import Menu from './components/Menu';
import './App.css';

const app = {
  name: 'days-off',
  version: '0.1.0',
};

export default class App extends Component {
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
    return (
      <div className="App">
        <div className="App__menu">
          <div className="App__header App__menu__header">
            <span>Days Off</span>
          </div>
          <Menu className="App__menu__content" />
          <div className="App__menu__footer">
            {app.name}@{app.version}
          </div>
        </div>
        <div className="App__body">
          <div className="App__header App__body__header">
            <UserHeader {...user} />
          </div>
          <div className="App__body__content">
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
