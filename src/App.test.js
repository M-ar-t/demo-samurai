import { render, screen } from '@testing-library/react';
import AppSamuraiJS from './App';

test('renders learn react link', () => {
  render(<AppSamuraiJS />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
