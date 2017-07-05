import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Login({ username, password, onChange, onLogin }) {
  const disabled = !username || !password;

  return (
    <form className="Login" onSubmit={onLogin}>
      <input
        autoFocus
        type="text"
        className="Login__input"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="password"
        className="Login__input"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button disabled={disabled} className="Login__submit" type="submit">
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
