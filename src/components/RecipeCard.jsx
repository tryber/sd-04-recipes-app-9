import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe, page, index }) {
  const path = {
    Meal: 'comidas',
    Drink: 'bebidas',
  };
  const dataTestId = {
    main: { card: `${index}-recipe-card`, name: `${index}-card-name` },
    detail: { card: `${index}-recomendation-card`, name: `${index}-recomendation-title` },
  };
  return (
    <Link to={`/${path[recipe.type]}/${recipe.id}`}>
      <div className="card" data-testid={dataTestId[page].card}>
        <div className="image-div">
          <img
            data-testid={`${index}-card-img`}
            src={recipe.strThumb}
            alt="recipe"
            className="recipe-image"
          />
          <p data-testid={dataTestId[page].name}>{recipe.strName}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;

RecipeCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  page: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
