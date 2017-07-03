import React, { Component } from 'react';
import Calendar from './components/Calendar';
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
    };
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <div className="App-menu">
          <div className="App-menu-header">
            <span>
              {app.name}
            </span>
          </div>
          <Menu />
        </div>
        <div className="App-body">
          <div className="App-body-header">
            <UserHeader {...user} />
          </div>
          <div className="App-body-content">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}
