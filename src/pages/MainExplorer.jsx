import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainExplorer = () => (
  <div className="Explorer-Container">
    <Header title="Explorar" />
    <div className="ExploreFood">
      <Link to="/explorar/comidas">
        <button data-testid="explore-food" type="button">
          Explorar Comidas
        </button>
      </Link>
    </div>
    <div className="ExploreDrinks">
      <Link to="explorar/bebidas">
        <button data-testid="explore-drinks" type="button">
          Explorar Bebidas
        </button>
      </Link>
    </div>
    <Footer />
  </div>
);

export default MainExplorer;
