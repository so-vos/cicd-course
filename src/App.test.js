import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders workshop title header', () => {
  render(<App />);
  const headerElement = screen.getByText('CI/CD Workshop');
  expect(headerElement).toBeInTheDocument();
});
