import React, { createContext, useState } from 'react';

export const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = (data) => setRecipes(data.slice(0, 12));

  const context = {
    isFetching,
    setIsFetching,
    recipes,
    setRecipes,
    fetchRecipes,
  }
  return (
    <RecipesContext.Provider value={context}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
