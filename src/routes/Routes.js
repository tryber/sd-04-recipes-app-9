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
        path="/bebidas"
        render={(props) => <MainRecipes {...props} type="cocktail" title="Bebidas" />}
      />
      <Route
        exact
        path="/comidas/:id"
        render={(props) => <RecipeDetails {...props} type="meal" />}
      />
      <Route
        exact
        path="/bebidas/:id"
        render={(props) => <RecipeDetails {...props} type="cocktail" />}
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
      {/* <Route
        exact path="/comidas/:id/in-progress"
        component={<RecipeInProgress />}
      />
      <Route
        exact path="/bebidas/:id/in-progress"
        component={<RecipeInProgress />}
      /> */}
      <Route exact path="/" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
