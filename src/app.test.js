import { render, screen } from '@testing-library/react';
import Admin from './layouts/Admin';  // correct path

test('renders the dashboard text', () => {
  render(<Admin />);
  const linkElement = screen.getByText(/dashboard/i); // change this if the text is different
  expect(linkElement).toBeInTheDocument();
});

