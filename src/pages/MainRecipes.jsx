import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import searchRecpipesByName from '../services/getRecipes';

const MainRecipes = ({ type }) => {
  const {
    isFetching, setIsFetching, recipes, fetchRecipes,
  } = useContext(RecipesContext);

  useEffect(() => {
    searchRecpipesByName(type, '').then((data) => {
      fetchRecipes(data.meals);
      setIsFetching(false);
    });
  }, []);

  if (isFetching) return <div><h3>Loading...</h3></div>;
  return (
    <div>
      {recipes.map((recipe) => (
        <p key={recipe.strMeal}>{recipe.strMeal}</p>
      ))}
    </div>
  );
};

MainRecipes.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MainRecipes;
