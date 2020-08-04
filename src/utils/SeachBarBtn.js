// import { useContext } from 'react';
// import { RecipesContext } from '../context/RecipesContext';
// import {
//   searchRecipesByName,
//   serchByIngredients,
//   searchByFirstLetter,
// } from '../services/getRecipes';

// const searchOptions = {
//   name: searchRecipesByName,
//   ingredients: serchByIngredients,
//   firstLetter: searchByFirstLetter,
// };

// const SeachBarBtn = (searchText, searchBy, type, history) => {
//   const { fetchRecipes, setIsFetching } = useContext(RecipesContext);

//   // if (searchText.length > 1 && searchBy === 'firstLetter') {
//   //   alert('Sua busca deve conter somente 1 (um) caracter');
//   // } else {
//     searchOptions[searchBy](type, searchText).then((data) => {
//       if (data.meals || data.drinks) {
//         fetchRecipes(data.meals || data.drinks);
//         setIsFetching(false);
//       } else {
//         return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
//       }
//       if (type === 'meal' && data.meals.length === 1) {
//         history.push(`/comidas/${data.meals[0].idMeal}`);
//       }
//       if (type === 'cocktail' && data.drinks.length === 1) {
//         history.push(`/bebidas/${data.drinks[0].idDrink}`);
//       }
//       return null;
//     });
//   // }
// };

// export default SeachBarBtn;
