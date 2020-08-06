import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const saveFavorite = (recipe, setFavoriteIcon) => {
  const { id, type, strArea, strCategory, strAlcoholic, strName, strThumb } = recipe;
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const getType = { Meal: 'comida', Drink: 'bebida' };
  const favoriteIndex = favorites.findIndex((favorite) => favorite.id === recipe.id);
  if (favoriteIndex === -1) {
    favorites.push({
      id,
      type: getType[type],
      area: strArea || '',
      category: strCategory || '',
      alcoholicOrNot: strAlcoholic || '',
      name: strName,
      image: strThumb,
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    setFavoriteIcon(blackHeartIcon);
  } else {
    favorites.splice(favoriteIndex, 1);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
    setFavoriteIcon(whiteHeartIcon);
  }
};

const FavoriteIcon = ({ recipe }) => {
  const [favoriteIcon, setFavoriteIcon] = useState(whiteHeartIcon);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (favorites.find((favorite) => favorite.id === recipe.id)) {
      setFavoriteIcon(blackHeartIcon);
    }
  }, [recipe]);

  return (
    <button onClick={() => saveFavorite(recipe, setFavoriteIcon)}>
      <img data-testid="favorite-btn" src={favoriteIcon} alt="favorite" />
    </button>
  );
};

FavoriteIcon.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FavoriteIcon;
