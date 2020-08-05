import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Searchbar from '../components/Searchbar';

const Header = ({ type, title }) => {
  const [seeSearchbar, setSeeSearchbar] = useState(false);
  const direction = useLocation().pathname;

  if (direction === '/comidas' || direction === '/bebidas' || direction === '/explorarorigem') {
    return (
      <div className="row">
        <header className="brand-logo center header">
          <Link to="/perfil">
            <img src={profileIcon} alt="profileIcon" data-testid="profile-top-btn" />
          </Link>
          <h3 data-testid="page-title">{title}</h3>
          <input
            src={searchIcon}
            type="image"
            data-testid="search-top-btn"
            onClick={() => setSeeSearchbar(!seeSearchbar)}
            alt="img-search"
          />
        </header>
        {seeSearchbar && <Searchbar type={type} />}
      </div>
    );
  }
  return (
    <div className="row">
      <header className="brand-logo center header">
        <Link to="/perfil">
          <img src={profileIcon} alt="profileIcon" data-testid="profile-top-btn" />
        </Link>
        <h3 data-testid="page-title">{title}</h3>
      </header>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
