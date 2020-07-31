import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import MainRecipes from '../pages/MainRecipes';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact path="/comidas"
        component={MainRecipes}
      />
      {/* <Route
        exact path="/bebidas"
        component={<MainRecipes {...props} type="cocktail" title="Bebidas"/>}
      /> */}
      {/* <Route
        exact path="/comidas/:id"
        component={<RecipeDetails />}
      />
      <Route
        exact path="/bebidas/:id"
        component={<RecipeDetails />}
      />
      <Route
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
