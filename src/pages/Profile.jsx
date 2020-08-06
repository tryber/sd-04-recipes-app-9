import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  let email = '';
  if (localStorage.getItem('user') && email === '') {
    email = JSON.parse(localStorage.getItem('user')).email;
  }

  return (
    <div>
      <Header title="Perfil" />
      <div data-testid="profile-email">{email}</div>
      <Link to="/receitas-feitas">
        <button data-testid="profile-done-btn" type="button">
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button data-testid="profile-favorite-btn" type="button">
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button data-testid="profile-logout-btn" type="button" onClick={() => localStorage.clear()}>
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
};

export default Profile;
// pagina não reconhecida pelo avaliador
