export const searchRecipesByName = (type, title) => (
  fetch(`https://www.the${type}db.com/api/json/v1/1/search.php?s=${title}`)
    .then((response) => response.json()
    .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))))
);

export const serchByIngredients = (type, ingred) => (
  fetch(`https://www.the${type}db.com/api/json/v1/1/list.php?i=${ingred}`)
    .then((response) => response.json()
    .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))))
);

export const searchByFirstLetter = (type, letter) => (
  fetch(`https://www.the${type}db.com/api/json/v1/1/search.php?f=${letter}`)
    .then((response) => response.json()
    .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))))
);