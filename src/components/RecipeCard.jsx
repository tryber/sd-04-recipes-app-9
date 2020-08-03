import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <Link>
      <div className="card">
        <div className="image-div">
          <img src={recipe.strMealThumb} alt="recipe" className="recipe-image" />
          <p>{recipe.strMeal}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};
