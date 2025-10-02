import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import Admin from './layouts/Admin'; 

// --- FIX: Mock document.scrollingElement for JSDOM ---
// This prevents the "Cannot set properties of undefined (setting 'scrollTop')" error.
beforeAll(() => {
  // Ensure document.body is present to have something to set scrollTop on
  if (!document.body.scrollingElement) {
    document.scrollingElement = document.body;
  }
});
// ---------------------------------------------------


test('renders the dashboard text', () => {
  render(
    <BrowserRouter>
      <Admin />
    </BrowserRouter>
  );
  
  // NOTE: If this assertion still fails, you may need to check the 
  // actual text visible in the Admin component. 
  // It is currently looking for the text "dashboard".
  const linkElement = screen.getByText(/dashboard/i); 
  expect(linkElement).toBeInTheDocument();
});