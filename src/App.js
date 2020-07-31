import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import MainRecipes from './pages/MainRecipes';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/comidas"
          component={MainRecipes}
        />
        <Route exact path="/" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
