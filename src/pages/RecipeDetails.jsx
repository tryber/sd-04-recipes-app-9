import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import { getRecipeDetailsById } from '../services/getRecipes';
import ShareBtn from '../components/ShareBtn';
import YouTube from 'react-youtube';

const showIngredientsList = (recipe) => (
  <div>
    <h4>Ingredients</h4>
    <ul>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={ingredient.name} data-testid={`${index}-ingredient-name-and-measure`}>
          {ingredient.name} - {ingredient.quantity}
        </li>
      ))}
    </ul>
  </div>
);

const saveIngredient = (e, index, checkedIngredients, setChkIngredients) => {
  if (e.target.checked) {
    setChkIngredients([...checkedIngredients, index]);
  } else {
    setChkIngredients(checkedIngredients.filter((ingredient) => ingredient !== index));
  }
};

const showIngredientsListCheck = (recipe, checkedIngredients, setChkIngredients) => (
  <div>
    <h4>Ingredients</h4>
    <ul>
      {recipe.ingredients.map((ingredient, index) => {
        const isChecked = checkedIngredients.includes(index);
        console.log(isChecked);
        return (
          <li key={ingredient.name} data-testid={`${index}-ingredient-step`}>
            <label
              htmlFor={`${ingredient.name} - ${index}`}
            >
              <input
                type="checkbox"
                id={`${ingredient.name} - ${index}`}
                checked={isChecked}
                onChange={(e) => saveIngredient(e, index, checkedIngredients, setChkIngredients)}
              />
              <span>{ingredient.name} - {ingredient.quantity}</span>
            </label>
          </li>
        );
      })}
    </ul>
  </div>
);

const instructions = (recipe) => (
  <div>
    <h4>Instructions</h4>
    <span data-testid="instructions">{recipe.strInstructions}</span>
  </div>
);

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

const saveIngredients = (type, id, checkedIngredients) => {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  inProgressRecipes[`${type}s`] = { ...inProgressRecipes[`${type}s`], [id]: checkedIngredients };
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
};

const showYoutubeVideo = (recipe) => {
  const opts = { height: '200', width: '325' };
  if (recipe.strYoutube) {
    return (
      <div data-testid="video">
        <h4>Video</h4>
        <YouTube videoId={recipe.strYoutube.split('=')[1]} opts={opts}/>
      </div>
    );
  }
};

const RecipeDetails = ({ type, page }) => {
  const { recipes, fetchRecipes } = useContext(RecipesContext);
  const { id } = useParams();
  const [checkedIngredients, setChkIngredients] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('inProgressRecipes')) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({ cocktails: {}, meals: {} }));
    }
    if (page === 'inProgress') {
      if (!JSON.parse(localStorage.getItem('inProgressRecipes'))[`${type}s`][id]) {
        const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
        inProgressRecipes[`${type}s`][id] = [];
        localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
      }
      setChkIngredients(JSON.parse(localStorage.getItem('inProgressRecipes'))[`${type}s`][id]);
    }
  }, [page, type, id]);

  useEffect(() => {
    if (page === 'inProgress') saveIngredients(type, id, checkedIngredients);
  }, [checkedIngredients]);

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
      <img src={recipes[0].strThumb} className="img-detail" alt="pic" data-testid="recipe-photo" />
      <div>
        {header(recipes[0])}
        {page === 'detail'
          ? showIngredientsList(recipes[0])
          : showIngredientsListCheck(recipes[0], checkedIngredients, setChkIngredients)}
        {instructions(recipes[0])}
        {page === 'detail' ? showYoutubeVideo(recipes[0]) : null}
      </div>
    </div>
  );
};

RecipeDetails.propTypes = {
  type: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default RecipeDetails;
