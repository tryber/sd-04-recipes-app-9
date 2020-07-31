import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import searchRecpipesByName from '../services/getRecipes';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

const MainRecipes = ({ type, title }) => {
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
      <Header title={title} />
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.strMeal} recipe={recipe}/>
      ))}
    </div>
  );
};

MainRecipes.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainRecipes;
