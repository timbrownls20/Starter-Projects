import React from 'react';
import { render, screen} from '@testing-library/react';
import App from './App';

test('App can render', () => {
  render(<App />);

  const title = screen.getByText(/React app from scratch/i);
  expect(title).toBeInTheDocument();

});