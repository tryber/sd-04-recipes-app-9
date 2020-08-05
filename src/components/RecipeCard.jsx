import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe, type, title }) {
  const getImage = type === 'meal' ? 'strMealThumb' : 'strDrinkThumb';
  const getName = type === 'meal' ? 'strMeal' : 'strDrink';
  const id = type === 'meal' ? 'idMeal' : 'idDrink';

  return (
    <Link to={`${title.toLowerCase()}/${recipe[id]}`}>
      <div className="card">
        <div className="image-div">
          <img src={recipe[getImage]} alt="recipe" className="recipe-image" />
          <p>{recipe[getName]}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
};
