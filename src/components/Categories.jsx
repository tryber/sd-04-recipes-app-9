import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { searchByCategories } from '../services/getRecipes';

const Categories = ({ type }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    searchByCategories(type).then((data) => {
      setCategories((data.drinks || data.meals).slice(0, 5));
    });
  }, []);

  const handleChange = () => {};

  return (
    <div>
      <button type="button" data-testid="filter-by-all-btn" onClick={() => handleChange()}>
        All
      </button>
      {categories.map((cat) => (
        <button
          type="button"
          data-testid={`${cat.strCategory}-category-filter`}
          onClick={() => handleChange()}
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
