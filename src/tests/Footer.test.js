import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Footer from '../components/Footer';

describe('Test component Footer', () => {
  test('Check if there are 3 icons: for food, for drinks and another for exploration.', () => {
    renderWithRouter(<Footer />);

    const mealIcon = screen.getByAltText(/Meal path/i);
    const drinkIcon = screen.getByAltText(/Drink path/i);
    const exploreIcon = screen.getByAltText(/Explore path/i);

    expect(mealIcon.src).toBe('http://localhost/mealIcon.svg');
    expect(drinkIcon.src).toBe('http://localhost/drinkIcon.svg');
    expect(exploreIcon.src).toBe('http://localhost/exploreIcon.svg');
  });

  test('Check that when clicking on the icon, the person is redirected to the specific page.', () => {
    renderWithRouter(<Footer />);

    const linkDrink = screen.getByTestId('link-Drink');
    const linkExplore = screen.getByTestId('link-Explore');
    const linkMeal = screen.getByTestId('link-Meal');
    // const linkExplore = screen.getAllByRole('link')[1].href;
    // console.log(linkExplore)

    expect(linkDrink.href).toBe('http://localhost/bebidas');
    expect(linkExplore.href).toBe('http://localhost/explorar');
    expect(linkMeal.href).toBe('http://localhost/comidas');
  });
});
