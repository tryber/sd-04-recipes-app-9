import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import { searchRecipesByName } from '../services/getRecipes';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

const MainRecipes = ({ type, title }) => {
  const {
    isFetching, setIsFetching, recipes, fetchRecipes,
  } = useContext(RecipesContext);

  useEffect(() => {
    searchRecipesByName(type, '').then((data) => {
      fetchRecipes(data.meals);
      setIsFetching(false);
    });
  }, []);

  if (isFetching) {
    return <div className="progress preloader"><div className="indeterminate" /></div>;
  };

  return (
    <div>
      <Header title={title} type={type} />
      <div className="main">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.strMeal} recipe={recipe} />
        ))}
      </div>
    </div >
  );
};

MainRecipes.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainRecipes;
