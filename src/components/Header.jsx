import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Searchbar from '../components/Searchbar';

const Header = ({ type, title }) => {
  const [seeSearchbar, setSeeSearchbar] = useState(false);
  const direction = useLocation().pathname;

  if (direction === '/comidas' || direction === '/bebidas' || direction === '/explorar/comidas/area') {
    return (
      <div className="row">
        <header className="brand-logo center header">
          <Link to="/perfil">
            <img src={profileIcon} alt="profileIcon" data-testid="profile-top-btn" />
          </Link>
          <h3 data-testid="page-title">{title}</h3>
          <button type="button" onClick={() => setSeeSearchbar(!seeSearchbar)}>
            <img src={searchIcon} alt="img-search" data-testid="search-top-btn" />
          </button>
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
  type: PropTypes.string.isRequired,
};

export default Header;
