const getIngredients = (recipe) => {
  const ingredientsList = [];
  for (let index = 1; index < 21; index += 1) {
    if (recipe[`strIngredient${index}`]) {
      ingredientsList.push({
        name: recipe[`strIngredient${index}`],
        quantity: recipe[`strMeasure${index}`],
      });
    } else {
      break;
    }
  }
  return ingredientsList;
};

const normalizeRecipe = (recipe, type) => {
  const {
    [`id${type}`]: id,
    [`str${type}`]: strName,
    strArea,
    strCategory,
    [`str${type}Thumb`]: strThumb,
    strYoutube,
    strInstructions,
    strAlcoholic,
  } = recipe;
  const ingredients = getIngredients(recipe);
  let tags = recipe.strTags;
  if (tags) tags = tags.split(',').slice(0, 2);
  return {
    id,
    type,
    strName,
    strArea,
    strCategory,
    strAlcoholic,
    strThumb,
    ingredients,
    strYoutube,
    strInstructions,
    tags,
  };
};

const dataNormalize = (recipes) => {
  const data = recipes.meals || recipes.drinks;
  let type = '';
  if (recipes.meals) {
    type = 'Meal';
  } else {
    type = 'Drink';
  }
  return data.map((recipe) => normalizeRecipe(recipe, type));
};

export default dataNormalize;
