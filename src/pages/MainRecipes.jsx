import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import { searchRecipesByName } from '../services/getRecipes';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';

const MainRecipes = ({ type, title }) => {
  const { isFetching, setIsFetching, recipes, fetchRecipes } = useContext(RecipesContext);

  useEffect(() => {
    searchRecipesByName(type, '').then((data) => {
      fetchRecipes(data);
      setIsFetching(false);
    });
  }, []);

  if (isFetching) {
    return (
      <div className="progress preloader">
        <div className="indeterminate" />
      </div>
    );
  }

  return (
    <div>
      <Header title={title} type={type} />
      <div className="main">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.strName} type={type} recipe={recipe} title={title} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

MainRecipes.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainRecipes;
