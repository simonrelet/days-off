import React from 'react';
import injectSheet from 'react-jss';
import Paper from '@marv/components/Paper';
import Icon from '@marv/components/Icon';
import Login from '../Login';
import styles from './styles';

const app = {
  name: 'login',
  version: '0.1.0',
};

function App({ classes }) {
  return (
    <div className={classes.app}>
      <div className={classes.content}>
        <Paper className={classes.box} zDepth={2}>
          <Icon name="days-off-color" className={classes.icon} />
          <Login />
        </Paper>
      </div>
      <div className={classes.footer}>
        {app.version}
      </div>
    </div>
  );
}

export default injectSheet(styles)(App);
