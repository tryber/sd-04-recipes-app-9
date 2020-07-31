import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
        value={}
        onChange={}
      />
      <label htmlFor="ingredientes">
        <input
          type="radio"
          id="ingredientes"
          data-testid="ingredient-search-radio"
          value={}
          onClick={}
        />
        Ingredientes
      </label>
      <label htmlFor="name">
        <input type="radio" id="name" data-testid="name-search-radio" value={} onClick={} />
        Nome
      </label>
      <label>
        <input
          type="radio"
          id="first-letter"
          data-testid="first-letter-search-radio"
          value={}
          onClick={}
        />
        Primeira letra
      </label>
      <button data-testid="exec-search-btn" type="button" onClick={}>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
