import React, { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { listIngredients, searchRecipesByIngredient } from '../services/getRecipes';
import { RecipesContext } from '../context/RecipesContext';

const ExplorerIngredientsPage = ({ type, target, history }) => {
  const [ingredients, setIngredients] = useState([]);
  const { fetchRecipes, setExplore, setIsFetching } = useContext(RecipesContext);

  useEffect(() => {
    listIngredients(type).then((data) =>
      setIngredients((data.meals || data.drinks).slice(0, 12)),
    );
  }, []);

  const handleClick = (ingredient) => {
    searchRecipesByIngredient(type, ingredient)
      .then((data) => fetchRecipes(data))
      .then(() => {
        setExplore(true);
        setIsFetching(false);
      })
      .then(() => history.push(`/${target}`));
  };

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      <div>
        {ingredients.map((ingredient, index) => {
          const ingr = ingredient.strIngredient || ingredient.strIngredient1;
          return (
            <div>
              <button
                data-testid={`${index}-ingredient-card`}
                onClick={() => handleClick(ingr)}
              >
                <img
                  src={`https://www.the${type}db.com/images/ingredients/${ingr}-Small.png`}
                  alt="ingredient"
                  data-testid={`${index}-card-img`}
                />
                <p data-testid={`${index}-card-name`}>
                  {ingr}
                </p>
              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  )
};

ExplorerIngredientsPage.propTypes = {
  type: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(ExplorerIngredientsPage);
