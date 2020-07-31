import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => {
  return (
    <footer className="page-footer row centerIcons">
      <div data-testid="footer">
        <Link to="/bebidas">
          <img data-testid="drink-bottom-btn" src={drinkIcon} alt="drink-icon" />
        </Link>
        <Link to="/explorar">
          <img data-testid="explore-bottom-btn" src={exploreIcon} alt="explore-icon" />
        </Link>
        <Link to="/comidas">
          <img data-testid="food-bottom-btn" src={mealIcon} alt="meal-icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
