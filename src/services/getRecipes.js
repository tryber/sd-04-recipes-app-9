const searchRecpipesByName = (type, title) => (
  fetch(`https://www.the${type}db.com/api/json/v1/1/search.php?s=${title}`)
    .then((response) => response.json()
    .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data))))
);

export default searchRecpipesByName;
