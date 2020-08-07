import React from 'react';
import NotFound from '../pages/NotFound';
import renderWithRouter from './renderWithRouter';
import { screen } from '@testing-library/react';

describe('Test page NotFound', () => {
  test('Check that the NotFound page contains the text "Not Found!".', () => {
    renderWithRouter(<NotFound />);

    const notFound = screen.getByText(/Not Found!/i);
    expect(notFound).toBeInTheDocument();
  });
});
