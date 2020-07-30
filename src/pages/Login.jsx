import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const toSubmit = () => {
    localStorage.setItem('mealsToken', 1)
    localStorage.setItem('cocktailsToken', 1)
    localStorage.setItem('user', ({email}))
  };
  
  return (
    <div>
      <h1>Login</h1>
      <input data-testid="email-input" type="email" placeholder="Email" required onChange={} />
      <input
        data-testid="password-input"
        type="password"
        placeholder="Senha"
        required
        onChange={}
      />
      <Link to="/comidas">
        <button data-testid="login-submit-btn" type="submit" disabled={} onClick={() => toSubmit()}>
          Entrar
        </button>
      </Link>
    </div>
  );
};
export default Login;
