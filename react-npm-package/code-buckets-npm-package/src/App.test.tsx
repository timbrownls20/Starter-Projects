import * as React from 'react';
import { render, screen} from '@testing-library/react';
import App from './App';

test('App can render', () => {
  render(<App />);

  const title = screen.getByText(/code buckets/i);
  expect(title).toBeInTheDocument();

});