import React, { useEffect, useContext, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { RecipesContext } from '../context/RecipesContext';
import { getRecipeDetailsById, searchRecipesByName } from '../services/getRecipes';
import ShareBtn from '../components/ShareBtn';
import dataNormalize from '../utils/dataNormalize';
import RecipeCard from '../components/RecipeCard';

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

const showYoutubeVideo = (recipe) => {
  const opts = { height: '200', width: '325' };
  if (recipe.strYoutube) {
    return (
      <div data-testid="video">
        <h4>Video</h4>
        <YouTube videoId={recipe.strYoutube.split('=')[1]} opts={opts} />
      </div>
    );
  }
  return null;
};

const showRecommended = (recommendedRecipes, title) => (
  <Fragment>
    <h4>Recommended Recipes</h4>
    <div>
      {recommendedRecipes.map((recipe, index) => (
        <span key={recipe.id}>
          <RecipeCard recipe={recipe} title={title} page="detail" index={index} />
        </span>
      ))}
    </div>
  </Fragment>
);

const header = (recipe) => (
  <div>
    <div>
      <div>
        <h3 data-testid="recipe-title">{recipe.strName}</h3>
        <span data-testid="recipe-category">
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

const showImage = (recipe) => (
  <img src={recipe.strThumb} className="img-detail" alt="pic" data-testid="recipe-photo" />
);

const instructions = (recipe) => (
  <div>
    <h4>Instructions</h4>
    <span data-testid="instructions">{recipe.strInstructions}</span>
  </div>
);

const RecipeDetails = ({ type, page, recommended }) => {
  const { recipes, fetchRecipes } = useContext(RecipesContext);
  const { id } = useParams();
  const [checkedIngredients, setChkIngredients] = useState([]);
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);

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
    searchRecipesByName(recommended, '').then((data) =>
      setRecommendedRecipes(dataNormalize(data).slice(0, 6)),
    );
  }, [id, type, recommended]);

  if (recipes.length === 0 || recipes.length > 1) return <div><h3>Loading...</h3></div>;

  return (
    <div>
      {showImage(recipes[0])}
      <div>
        {header(recipes[0])}
        {page === 'detail'
          ? showIngredientsList(recipes[0])
          : showIngredientsListCheck(recipes[0], checkedIngredients, setChkIngredients)}
        {instructions(recipes[0])}
        {page === 'detail' ? showYoutubeVideo(recipes[0]) : null}
        {page === 'detail' ? showRecommended(recommendedRecipes, title) : null}
      </div>
    </div>
  );
};

RecipeDetails.propTypes = {
  type: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  recommended: PropTypes.string.isRequired,
};

export default RecipeDetails;
