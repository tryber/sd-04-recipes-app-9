import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import dataNormalize from '../utils/dataNormalize';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [explore, setExplore] = useState(false);

  const fetchRecipes = (data) => setRecipes(dataNormalize(data).slice(0, 12));

  const context = {
    isFetching,
    setIsFetching,
    recipes,
    setRecipes,
    fetchRecipes,
    explore,
    setExplore,
  };

  return <RecipesContext.Provider value={context}>{children}</RecipesContext.Provider>;
};

RecipesProvider.propTypes = { children: PropTypes.node.isRequired };

export default RecipesProvider;
