import { render, screen } from '@testing-library/react';
// Import the necessary router component
import { BrowserRouter } from 'react-router-dom'; 
import Admin from './layouts/Admin'; // Assuming this is the correct path

// Wrap the test component render call in a BrowserRouter
test('renders the dashboard text', () => {
  render(
    <BrowserRouter>
      <Admin />
    </BrowserRouter>
  );
  
  // Now, the component has the router context it needs.
  // We can proceed with the original assertions.
  const linkElement = screen.getByText(/dashboard/i); // Ensure this text exists
  expect(linkElement).toBeInTheDocument();
});

// If you had other tests in this file, apply the wrapper to them too.
