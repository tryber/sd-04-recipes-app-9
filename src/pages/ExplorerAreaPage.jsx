import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OptionArea from '../components/OptionArea';
import RecipeCard from '../components/RecipeCard';
import { RecipesContext } from '../context/RecipesContext';

const ExplorerAreaPage = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <div>
      <Header title="Explorar Origem" type="meal" />
      <OptionArea />
      {recipes.map((recipe, index) => (
        <RecipeCard key={recipe.id} recipe={recipe} index={index} page="main" />
      ))}
      <Footer />
    </div>
  );
};

export default ExplorerAreaPage;
