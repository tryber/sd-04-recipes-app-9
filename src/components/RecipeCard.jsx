import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  return (
    <Link>
      <div className="recipeCard">
        <img src={recipe.strMealThumb} alt="recipe" />
        <p>{recipe.strMeal}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};
