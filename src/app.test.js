import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Helper function to wrap App with its required context (BrowserRouter for routing)
const renderApp = () => {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

// Assuming this test passed, or is a placeholder for a basic render test
test('renders the main application component without crashing', () => {
  renderApp();
  // You might want a more specific assertion here, but this checks for basic rendering.
  expect(screen.getByText(/Creative Tim/i)).toBeInTheDocument();
});

// Assuming this test passed and checked for a link to the user profile
test('renders the User Profile link', () => {
  renderApp();
  const linkElement = screen.getByRole('link', { name: /User Profile/i });
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', '/admin/user');
});

// Assuming this test passed and checked for the footer text
test('renders the footer text', () => {
  renderApp();
  const footerElement = screen.getByText(/made with love for a better web/i);
  expect(footerElement).toBeInTheDocument();
});

// This is the modified failing test
test('renders the main Dashboard sidebar link', () => {
  renderApp();

  // The previous line was: const linkElement = screen.getByRole('link', { name: 'Dashboard' });
  // This failed because two elements had the role 'link' and name 'Dashboard'.

  // 1. Get ALL links with the accessible name "Dashboard".
  const dashboardLinks = screen.getAllByRole('link', { name: 'Dashboard' });

  // 2. Filter the array to find the specific link pointing to '/admin/dashboard'.
  const linkElement = dashboardLinks.find(link => link.getAttribute('href') === '/admin/dashboard');

  // Assertions
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', '/admin/dashboard');
});

// You may have other tests here...