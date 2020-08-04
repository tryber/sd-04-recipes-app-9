import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import {
  searchRecipesByName,
  serchByIngredients,
  searchByFirstLetter,
} from '../services/getRecipes';

const SearchBar = ({ type, history }) => {
  const [state, setState] = useState({ searchBy: 'name', searchText: '' });
  const { fetchRecipes, setIsFetching } = useContext(RecipesContext);
  const { searchBy, searchText } = state;

  const handleBtn = () => {
    const searchOptions = {
      name: searchRecipesByName,
      ingredients: serchByIngredients,
      firstLetter: searchByFirstLetter,
    };

    if (searchText.length > 1 && searchBy === 'firstLetter') {
      alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      searchOptions[searchBy](type, searchText).then((data) => {
        if (data.meals || data.drinks) {
          fetchRecipes(data.meals || data.drinks);
          setIsFetching(false);
        } else {
          return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        }
        if (type === 'meal' && data.meals.length === 1) {
          history.push(`/comidas/${data.meals[0].idMeal}`);
        }
        if (type === 'cocktail' && data.drinks.length === 1) {
          history.push(`/bebidas/${data.drinks[0].idDrink}`);
        }
        return null;
      });
    }
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
        name="searchText"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="ingredientes" className="input-radio">
        <input
          type="radio"
          id="ingredientes"
          name="searchBy"
          data-testid="ingredient-search-radio"
          value="ingredients"
          onClick={(e) => handleChange(e)}
        />
        <span>Ingredientes</span>
      </label>
      <label htmlFor="name" className="input-radio">
        <input
          type="radio"
          id="name"
          name="searchBy"
          data-testid="name-search-radio"
          value="name"
          onClick={(e) => handleChange(e)}
        />
        <span>Nome</span>
      </label>
      <label htmlFor="first-letter" className="input-radio">
        <input
          type="radio"
          id="first-letter"
          name="searchBy"
          data-testid="first-letter-search-radio"
          value="firstLetter"
          onClick={(e) => handleChange(e)}
        />
        <span>Primeira letra</span>
      </label>
      <button data-testid="exec-search-btn" type="button" onClick={() => handleBtn()}>
        Buscar
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default withRouter(SearchBar);
