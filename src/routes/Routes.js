import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import MainRecipes from '../pages/MainRecipes';
import MainExplorer from '../pages/MainExplorer';
import RecipeDetails from '../pages/RecipeDetails';
import Profile from '../pages/Profile';
import ExplorerDrinksOrFoods from '../pages/ExplorerDrinksOrFoods';
import ExplorerIngredientsPage from '../pages/ExplorerIngredientsPage';
import ExplorerAreaPage from '../pages/ExplorerAreaPage';
import MadeRecipes from '../pages/MadeRecipes';
import Favorites from '../pages/Favorites';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/comidas"
        render={(props) => <MainRecipes {...props} type="meal" title="Comidas" />}
      />
      <Route
        exact
        path="/comidas/:id"
        render={(props) => (
          <RecipeDetails {...props} type="meal" page="detail" recommended="cocktail" />
        )}
      />
      <Route
        exact path="/comidas/:id/in-progress"
        render={(props) => (
          <RecipeDetails {...props} type="meal" page="inProgress" recommended="cocktail" />
        )}
      />
      <Route
        exact
        path="/bebidas"
        render={(props) => <MainRecipes {...props} type="cocktail" title="Bebidas" />}
      />
      <Route
        exact
        path="/bebidas/:id"
        render={(props) => (
          <RecipeDetails {...props} type="cocktail" page="detail" recommended="meal" />
        )}
      />
      <Route
        exact path="/bebidas/:id/in-progress"
        render={(props) => (
          <RecipeDetails {...props} type="cocktail" page="inProgress" recommended="meal" />
        )}
      />
      <Route exact path="/perfil" component={Profile} />
      <Route exact path="/explorar" component={MainExplorer} />
      <Route
        exact
        path="/explorar/comidas"
        render={(props) => (
          <ExplorerDrinksOrFoods {...props} type="meal" title="Explorar Comidas" />
        )}
      />
      <Route
        exact
        path="/explorar/bebidas"
        render={(props) => (
          <ExplorerDrinksOrFoods {...props} type="cocktail" title="Explorar Bebidas" />
        )}
      />
      <Route exact path="/explorar/comidas/ingredientes" component={ExplorerIngredientsPage} />
      <Route exact path="/explorar/bebidas/ingredientes" component={ExplorerIngredientsPage} />
      <Route exact path="/explorar/comidas/area" component={ExplorerAreaPage} />
      <Route exact path="/explorar/bebidas/area" component={NotFound} />
      <Route exact path="/receitas-feitas" component={MadeRecipes} />
      <Route exact path="/receitas-favoritas" component={Favorites} />
      <Route exact path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
