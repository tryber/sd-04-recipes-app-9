import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe, type, title }) {

  return (
    <Link to={`${title.toLowerCase()}/${recipe.id}`}>
      <div className="card">
        <div className="image-div">
          <img src={recipe.strThumb} alt="recipe" className="recipe-image" />
          <p>{recipe.strName}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
