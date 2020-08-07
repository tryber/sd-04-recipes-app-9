import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../App.css';

function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <div className="footer-drink">
        <Link to="/bebidas" data-testid="link-Drink">
          <img src={drinkIcon} data-testid="drinks-bottom-btn" alt="Drink path" />
        </Link>
      </div>
      <div className="footer-explore">
        <Link to="/explorar" data-testid="link-Explore">
          <img src={exploreIcon} data-testid="explore-bottom-btn" alt="Explore path" />
        </Link>
      </div>
      <div className="footer-meal">
        <Link to="/comidas" data-testid="link-Meal">
          <img src={mealIcon} data-testid="food-bottom-btn" alt="Meal path" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
