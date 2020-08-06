import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const { email, password } = state;

  const toSubmit = (x) => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ x: email }));
  };

  const checkEmail = (mail) => mail.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);

  const checkPassword = (value) => value.length > 6;

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
      <Link to="/comidas">
        <button
          data-testid="login-submit-btn"
          type="button"
          disabled={!(checkPassword(password) && checkEmail(email))}
          onClick={() => toSubmit(email)}
        >
          Entrar
        </button>
      </Link>
    </div>
  );
};

export default Login;
