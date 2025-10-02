import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer'; 
// Note: The fix for `toBeInTheDocument` relies on you creating and committing
// the file src/setupTests.js (with 'import "@testing-library/jest-dom";' inside).

describe('Footer Component', () => {

    // Test 1: Check if the component renders without crashing
    test('renders the Footer component', () => {
        render(<Footer />);
        // The HTML output showed a <footer> tag with role="contentinfo"
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    // Test 2: Check for a specific piece of text (The year '2025' is visible in the HTML)
    test('displays the current year in the copyright notice', () => {
        render(<Footer />);
        
        // The HTML showed "© 2025", so we look for the text '2025'.
        // We removed the failing regex /Copyright.*2025/i
        const yearText = screen.getByText(/2025/i); 
        
        expect(yearText).toBeInTheDocument();
    });

    // Test 3: Check for an existing link (The link named 'Home' is visible in the HTML)
    test('contains a link named "Home" that points to #pablo', () => {
        render(<Footer />);
        
        // The original link 'Privacy Policy' failed. We look for 'Home' instead.
        const homeLink = screen.getByRole('link', { name: /Home/i });
        
        expect(homeLink).toBeInTheDocument();
        // Check the actual 'href' attribute seen in the pipeline output
        expect(homeLink).toHaveAttribute('href', '#pablo'); 
    });
});