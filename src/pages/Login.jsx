import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const checkEmail = (mail) => mail.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);

const checkPassword = (value) => value.length > 6;

const toSubmit = () => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
};

const saveEmail = (mail) => localStorage.setItem('user', JSON.stringify({ email: mail }));

const submitButton = (state) => (
  <Link to="/comidas">
    <button
      data-testid="login-submit-btn"
      type="button"
      disabled={!(checkPassword(state.password) && checkEmail(state.email))}
      onClick={() => {
        toSubmit();
        saveEmail(state.email);
      }}
    >
      Entrar
      </button>
  </Link>
);

const Login = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const { email, password } = state;

  const toHandleEmail = (handleEmail) => setState({ ...state, email: handleEmail });

  const toHandlePassword = (handlePassword) => setState({ ...state, password: handlePassword });

  return (
    <div>
      <h1>Login</h1>
      <input
        data-testid="email-input"
        value={email}
        type="email"
        placeholder="Email"
        required
        onChange={(e) => toHandleEmail(e.target.value)}
      />
      <input
        data-testid="password-input"
        value={password}
        type="password"
        placeholder="Senha"
        required
        onChange={(e) => toHandlePassword(e.target.value)}
      />
      {submitButton(state)}
    </div>
  );
};

export default Login;
