import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareBtn from './ShareBtn';
import FavoriteIcon from './FavoriteIcon';

const doneRecipe = (recipe, index) => {
  const { name, type, alcoholicOrNot, image, area, category, doneDate, tags, id } = recipe;
  return (
    <div>
      <Link to={`${type}/${id}`}>
        <img src={image} alt={name} data-testid={`${index}-horizontal-image`} />
      </Link>
      <div>
        <span data-testid={`${index}-horizontal-top-text`}>
          {type === 'comida' ? `${area} - ${category}` : `${alcoholicOrNot}`}
          <ShareBtn dataTestid={`${index}-horizontal-share-btn`} type={type} id={id} />
          <Link to={`${type}s/${id}`}>
            <span data-testid={`${index}-horizontal-name`}>{name}</span>
          </Link>
          <p data-testid={`${index}-horizontal-done-date`}>{`Feita em ${doneDate}`}</p>
          <p>
            {tags &&
              tags.map((tag) => (
                <span key={tag} data-testid={`${index}-${tag}-horizontal-tag`}>
                  {tag}
                </span>
              ))}
          </p>
        </span>
      </div>
    </div>
  );
};

const favoriteRecipe = (recipe, recipes, index, setRecipes) => {
  const { name, type, alcoholicOrNot, image, area, category, doneDate, tags, id } = recipe;
  return (
    <div>
      <Link to={`${type}/${id}`}>
        <img src={image} alt={name} data-testid={`${index}-horizontal-image`} />
      </Link>
      <div>
        <span data-testid={`${index}-horizontal-top-text`}>
          {type === 'comida' ? `${area} - ${category}` : `${alcoholicOrNot}`}
          <ShareBtn dataTestid={`${index}-horizontal-share-btn`} type={type} id={id} />
          <button
            type="button"
            onClick={() => setRecipes(recipes.filter((element) => element.id !== id))}
          >
            <FavoriteIcon dataTestId={`${index}-horizontal-favorite-btn`} recipe={recipe} />
          </button>
          <p data-testid={`${index}-horizontal-done-date`}>{`Feita em ${doneDate}`}</p>
          <p>
            {tags &&
              tags.map((tag) => (
                <span key={tag} data-testid={`${index}-${tag}-horizontal-tag`}>
                  {tag}
                </span>
              ))}
          </p>
        </span>
      </div>
    </div>
  );
};

const SavedRecipes = ({ index, recipe, recipes, page, setRecipes }) => {
  if (page === 'doneRecipes') {
    return doneRecipe(recipe, index);
  }
  return favoriteRecipe(recipe, recipes, index, setRecipes);
};

SavedRecipes.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  doneDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SavedRecipes;
