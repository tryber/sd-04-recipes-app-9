import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import Login from '../pages/Login';

describe('Test page Login', () => {
  test('Check that the login page contains the text "Login".', () => {
    renderWithRouter(<Login />);

    const loginText = screen.getByText(/Login/i);
    expect(loginText).toBeInTheDocument();
  });

  test('Test the email input.', () => {
    renderWithRouter(<Login />);

    const emailInput = screen.getByTestId('email-input');
    fireEvent.change(emailInput, { target: { value: 'email@email.com' } });

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue('email@email.com');

  });

  test('Test the password input.', () => {
    renderWithRouter(<Login />);

    const passwordInput = screen.getByTestId('password-input');
    fireEvent.change(passwordInput, { target: { value: '1234567' } });

    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveValue('1234567');
  });

  test('Check if the submit button is disabled.', () => {
    renderWithRouter(<Login />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const buttonSubmit = screen.getByTestId('login-submit-btn');

    fireEvent.change(emailInput, { target: { value: 'email@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 12345 } });

    expect(buttonSubmit).toBeDisabled();
    expect(emailInput).toHaveValue('email@email.com');
    expect(buttonSubmit).toBeDisabled();
  });

  test('Check if the submit button is enable.', () => {
    renderWithRouter(<Login />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    const buttonSubmit = screen.getByTestId('login-submit-btn');
    expect(buttonSubmit).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: 'email@email.com' } });
    expect(emailInput).toHaveValue('email@email.com');
    expect(buttonSubmit).toBeDisabled();

    fireEvent.change(passwordInput, { target: { value: 1234567 } });
    expect(buttonSubmit).not.toBeDisabled();
  });

  test('Check information saved in localStorage.', () => {
    renderWithRouter(<Login />);

    const buttonSubmit = screen.getByTestId('login-submit-btn');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');

    fireEvent.change(emailInput, { target: { value: 'email@email.com' } });
    fireEvent.change(passwordInput, { target: { value: 1234567 } });
    fireEvent.click(buttonSubmit);

    expect(JSON.parse(localStorage.getItem('mealsToken'))).toBe(1);
    expect(JSON.parse(localStorage.getItem('cocktailsToken'))).toBe(1);
    expect(JSON.parse(localStorage.getItem('user')).email).toBe('email@email.com');
  })
});
