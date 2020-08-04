import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import MainRecipes from '../pages/MainRecipes';
import RecipeDetails from '../pages/RecipeDetails';
import Profile from '../pages/Profile';

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
