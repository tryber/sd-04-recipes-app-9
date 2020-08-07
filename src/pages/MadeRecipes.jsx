import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import SavedRecipes from '../components/SavedRecipes';

const filterButtons = (setFilter) => {
  const onClick = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        value=""
        onClick={(event) => onClick(event)}
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        value="comida"
        onClick={(event) => onClick(event)}
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        value="bebida"
        onClick={(event) => onClick(event)}
      >
        Drinks
      </button>
    </div>
  );
};

const showRecipes = (filter, recipes, page, setRecipes) => (
  <div>
    {recipes.filter((recipe) => {
      if (filter) {
        return recipe.type === filter;
      }
      return true;
    })
      .map((recipe, index) => (
        <SavedRecipes
          index={index}
          recipe={recipe}
          recipes={recipes}
          page={page}
          setRecipes={setRecipes}
        />
      ))}
  </div>
);

const MadeRecipes = ({ title, page }) => {
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(page))) {
      setRecipes(JSON.parse(localStorage.getItem(page)));
    }
  }, [page]);

  return (
    <div>
      <Header title={title} />
      {filterButtons(setFilter)}
      {showRecipes(filter, recipes, page, setRecipes)}
    </div>
  );
};

MadeRecipes.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default MadeRecipes;
