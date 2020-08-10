import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { randomSurpriseMe } from '../services/getRecipes';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExplorerDrinksOrFoods = ({ type, title }) => {
  const direction = useLocation().pathname;
  const history = useHistory();
  const handleChange = () => {
    let idMealOurDrink = 'idDrink';
    if (type === 'meal') {
      idMealOurDrink = 'idMeal';
      randomSurpriseMe(type).then((data) =>
        history.push(`/comidas/${(data.drinks || data.meals)[0][idMealOurDrink]}`),
      );
    } else {
      randomSurpriseMe(type).then((data) =>
        history.push(`/bebidas/${(data.drinks || data.meals)[0][idMealOurDrink]}`),
      );
    }
  };

  if (direction === '/explorar/comidas') {
    return (
      <div>
        <Header title={title} type={type} />
        <div>
          <div>
            <Link to="/explorar/comidas/ingredientes">
              <button type="button" data-testid="explore-by-ingredient">
                Por Ingredientes
              </button>
            </Link>
            <Link to="/explorar/comidas/area">
              <button type="button" data-testid="explore-by-area">
                Por Local de Origem
              </button>
            </Link>
            <button type="button" data-testid="explore-surprise" onClick={handleChange}>
              Me Surpreenda!
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header title={title} type={type} />
      <div>
        <div>
          <Link to="/explorar/bebidas/ingredientes">
            <button type="button" data-testid="explore-by-ingredient">
              Por Ingredientes
            </button>
          </Link>
          <button type="button" data-testid="explore-surprise" onClick={handleChange}>
            Me Surpreenda!
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExplorerDrinksOrFoods;

ExplorerDrinksOrFoods.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
