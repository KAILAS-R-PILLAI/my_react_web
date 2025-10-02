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
  
  // Use the element's actual role and its name (text content)
// This finds the anchor tag <a> that links to /admin/dashboard
const linkElement = screen.getByRole('link', { name: 'Dashboard' }); 
expect(linkElement).toBeInTheDocument();
expect(linkElement).toHaveAttribute('href', '/admin/dashboard');
});