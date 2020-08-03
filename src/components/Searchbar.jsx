import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { RecipesContext } from '../context/RecipesContext';
import {
  searchRecipesByName,
  serchByIngredients,
  searchByFirstLetter,
} from '../services/getRecipes';

function SearchBar({ type }) {
  const { fetchRecipes, setIsFetching } = useContext(RecipesContext);
  const [state, setState] = useState({ searchBy: '', searchText: '' });
  const { searchBy, searchText } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

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
        if (data.meals) {
          fetchRecipes(data.meals);
          setIsFetching(false);
        } else {
          alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        }
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
        name="searchText"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="ingredientes">
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
      <label htmlFor="name">
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
      <label htmlFor="first-letter">
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
}

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SearchBar;
