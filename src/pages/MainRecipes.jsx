import React, { useContext, useEffect } from 'react';
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
      {recipes.map((recipe, index) => (
        <p key={recipe.strMeal}>{recipe.strMeal}</p>
      ))}
    </div>
  );
};

MainRecipes.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainRecipes;
