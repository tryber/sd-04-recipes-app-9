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
        <Link to="/bebidas" data-testid="drinks-link">
          <img src={drinkIcon} data-testid="drinks-bottom-btn" alt="Drink-Path" />
        </Link>
      </div>
      <div className="footer-explore">
        <Link to="/explorar" data-testid="explore-link">
          <img src={exploreIcon} data-testid="explore-bottom-btn" alt="Explore-Path" />
        </Link>
      </div>
      <div className="footer-meal" data-testid="meals-link">
        <Link to="/comidas">
          <img src={mealIcon} data-testid="food-bottom-btn" alt="Meal-Path" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
