import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

function Login({ classes, username, password, onChange, onLogin }) {
  const disabled = !username || !password;

  return (
    <form className={classes.login} onSubmit={onLogin}>
      <input
        autoFocus
        type="text"
        className={classes.input}
        placeholder="Username"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="password"
        className={classes.input}
        placeholder="Password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button disabled={disabled} className={classes.button} type="submit">
        Log in
      </button>
    </form>
  );
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default injectSheet(styles)(Login);
