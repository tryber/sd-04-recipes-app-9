import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const { email, password } = state;

  const toSubmit = (email) => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  const checkEmail = (email) => email.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  const checkPassword = (password) => password.length > 6;

  const toHandleEmail = (email) => setState({ ...state, email });

  const toHandlePassword = (password) => setState({ ...state, password });

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
          type="submit"
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
