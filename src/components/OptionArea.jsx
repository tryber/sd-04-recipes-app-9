import React, { useContext, useEffect, useState } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { listAllArea, searchByArea, searchRecipesByName } from '../services/getRecipes';

const OptionArea = () => {
  const { fetchRecipes } = useContext(RecipesContext);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    searchRecipesByName('meal', '').then((data) => fetchRecipes(data));
    listAllArea('meal').then((data) => setAreas(data.meals));
  }, []);

  const handleChange = (country) => {
    if (country === 'All') {
      searchRecipesByName('meal', '').then((data) => fetchRecipes(data));
    } else {
      searchByArea(country).then((data) => fetchRecipes(data));
    }
  };

  return (
    <div>
      <select
        data-testid="explore-by-area-dropdown"
        onChange={(event) => handleChange(event.target.value)}
      >
        <option data-testid="All-option">All</option>
        {areas.map((e) => (
          <option value={e.strArea} data-testid={`${e.strArea}-option`}>{e.strArea}​</option>
        ))}
      </select>
    </div>
  );
};

export default OptionArea;
