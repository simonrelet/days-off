// @flow
import React from 'react';
import './style.css';

type Props = {
  username: string,
  password: string,
  onChange: (e: SyntheticInputEvent) => void,
  onLogin: () => void,
};

export default function Login({
  username,
  password,
  onChange,
  onLogin,
}: Props) {
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
