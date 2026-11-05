import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the portfolio with a working theme switch', () => {
  localStorage.clear();
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Adi Jha' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Curriculum Vitae' })).toHaveAttribute('href', '/documents/adi-jha-cv.pdf');
  fireEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' }));
  expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument();
});
