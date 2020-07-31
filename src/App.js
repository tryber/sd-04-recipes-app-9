import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import RecipesProvider from './context/RecipesContext';

function App() {
  return (
    <RecipesProvider>
      <Routes />
    </RecipesProvider>
  );
}

export default App;
