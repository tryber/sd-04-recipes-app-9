import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Searchbar from '../components/Searchbar';

const Header = ({ type, title }) => {
  const [seeSearchbar, setSeeSearchbar] = useState(false);

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
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
