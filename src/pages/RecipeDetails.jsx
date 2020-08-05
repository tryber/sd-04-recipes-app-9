import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import { getRecipeDetailsById } from '../services/getRecipes';
import ShareBtn from '../components/ShareBtn';

const header = (recipe) => (
  <div>
    <div>
      <div>
        <h3 data-testid="recipe-title">{recipe.strName}</h3>
        <span data-tesid="recipe-category">
          {recipe.strCategory} - {recipe.strAlcoholic}
        </span>
      </div>
      <div>
        <ShareBtn
          type={recipe.type === 'meal' ? 'comida' : 'bebida'}
          id={recipe.id}
        />
      </div>
    </div>
  </div>
);

const RecipeDetails = ({ type }) => {
  const { recipes, fetchRecipes } = useContext(RecipesContext);
  const { id } = useParams();

  useEffect(() => {
    getRecipeDetailsById(type, id).then((data) => fetchRecipes(data));
  }, [id, type]);

  if (recipes.length === 0 || recipes.length > 1) {
    return (
      <div className="progress preloader">
        <div className="indeterminate" />
      </div>
    );
  }

  return (
    <div>
      <img src={recipes[0].strThumb} data-testid="recipe-photo" alt="recipe-pic" />
      <div>
        {header(recipes[0])}
      </div>
    </div>
  );
};

RecipeDetails.propTypes = {
  type: PropTypes.string.isRequired,
}

export default RecipeDetails;
