import React from 'react';

const Categories = () => {
  return (
    <div>
      <button type="button" data-testid="filter-by-all-btn" onClick={() => {}}>
        All
      </button>
      <button type="button" data-testid="${categoryName}-category-filter" onClick={() => {}}>
        Category
      </button>
    </div>
  );
};

export default Categories;
