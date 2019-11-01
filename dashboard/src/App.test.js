import React from 'react';
import App from './App';
import { render } from '@testing-library/react';


test('renders without crashing', () => {
  render(<App />);
});

test('it displays a title with text Player Stats', () => {
  const { getByText } = render(<App />);
  // console.log(container)
  getByText(/^player stats$/i);
});

test('it displays a button with text Hit', () => {
  const { getByText } = render(<App />);
  // console.log(container)
  getByText(/^hit$/i);
});

test('it displays an output with the strike count', () => {
  const { getByTestId } = render(<App />);
  // console.log(container)
  getByTestId('strikes-count-display')
});
