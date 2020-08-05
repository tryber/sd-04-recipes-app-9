import PropTypes from 'prop-types';
import React, { useEffect, useState, useContext } from 'react';
import {
  searchByCategoriesBtn,
  searchRecipesByName,
  searchByCategories,
} from '../services/getRecipes';
import { RecipesContext } from '../context/RecipesContext';

const Categories = ({ type }) => {
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState('');
  const { fetchRecipes, setIsFetching } = useContext(RecipesContext);

  useEffect(() => {
    searchByCategoriesBtn(type).then((data) => {
      setCategories((data.meals || data.drinks).slice(0, 5));
    });
  }, [type]);

  useEffect(() => {
    if (filteredData) {
      searchByCategories(type, filteredData).then((data) => {
        fetchRecipes(data);
        setIsFetching(false);
      });
    } else {
      searchRecipesByName(type, '').then((data) => {
        fetchRecipes(data);
        setIsFetching(false);
      });
    }
  }, [filteredData]);

  const handleChange = (category) => {
    if (category === 'All' || category === filteredData) {
      setFilteredData('');
    } else {
      setFilteredData(category);
    }
  };

  return (
    <div>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={(event) => handleChange(event.target.innerHTML)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          data-testid={`${cat.strCategory}-category-filter`}
          type="button"
          onClick={(event) => handleChange(event.target.innerHTML)}
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
};

Categories.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Categories;
