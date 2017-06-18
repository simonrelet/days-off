// @flow
import React, { Component } from 'react';
import Calendar from './components/Calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <div className="Header-left">days-off</div>
          <div className="Header-right" />
        </div>
        <div className="Content">
          <div className="Menu" />
          <div className="Content-body">
            <Calendar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
