import React from 'react';
import Box from './components/Box';
import Login from './components/Login';
import './App.css';

const app = {
  name: 'login',
  version: '0.1.0',
};

export default function() {
  return (
    <div className="App">
      <div className="App__content">
        <div className="App__content--centered">
          <Box title="Login">
            <Login />
          </Box>
        </div>
      </div>
      <div className="App__footer">
        <div className="App__footer--right">
          {app.name}@{app.version}
        </div>
      </div>
    </div>
  );
}
