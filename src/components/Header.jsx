import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

const Header = (/* { title } */) => (
  <div className="row">
    <header className="brand-logo center">
      <Link to="/perfil">
        <img src={profileIcon} alt="profileIcon" data-testid="profile-top-btn" />
      </Link>
      <h1 data-testid="page-title">{/* title */}</h1>
      <input src={searchIcon} type="image" data-testid="search-top-btn" />
    </header>
  </div>
);

export default Header;
