import React from 'react';
import MarvApp from '@marv/components/MarvApp';
import Box from './components/Box';
import Login from './components/Login';
import './App.css';

const app = {
  name: 'login',
  version: '0.1.0',
};

export default function() {
  return (
    <MarvApp
      app={app}
      content={({ className }) =>
        <div className={className + ' App__content--centered'}>
          <Box title="Login">
            <Login />
          </Box>
        </div>}
    />
  );
}
