export const searchRecipesByName = (type, title) =>
  fetch(`https://www.the${type}db.com/api/json/v1/1/search.php?s=${title}`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );

export const serchByIngredients = (type, ingred) =>
  fetch(`https://www.the${type}db.com/api/json/v1/1/filter.php?i=${ingred}`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );

export const searchByFirstLetter = (type, letter) =>
  fetch(`https://www.the${type}db.com/api/json/v1/1/search.php?f=${letter}`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );

export const getRecipeDetailsById = (type, id) =>
  fetch(`https://www.the${type}db.com/api/json/v1/1/lookup.php?i=${id}`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );

export const searchByCategoriesBtn = (type) =>
  fetch(`https://www.the${type}db.com/api/json/v1/1/list.php?c=list`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );

export const searchByCategories = (type, category) =>
  fetch(`https://www.the${type}db.com/api/json/v1/1/filter.php?c=${category}`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );

export const randomSurpriseMe = (type) =>
  fetch(`https://www.the${type}db.com/api/json/v1/1/random.php`).then((response) =>
    response.json().then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))),
  );

export const listAllArea = (type) =>
  fetch(`https://www.the${type}db.com/api/json/v1/1/list.php?a=list`).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );

export const searchByArea = (area) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`).then((response) =>
    response.json().then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))),
  );
