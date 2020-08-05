import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Profile = () => {
  const emailUser = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Header title="Perfil" />
      <div data-testid="profile-email">{emailUser}</div>
      <Link to="/receitas-feitas">
        <button data-testid="profile-email" type="button">
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button data-testid="profile-favorite-btn" type="button">
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button data-testid="profile-logout-btn" type="button">
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
};

export default Profile;
