import React from 'react';
import { render, screen } from '@testing-library/react';
// Assuming your Footer component is the default export
import Footer from './Footer'; 
// If it's a named export, use: import { Footer } from './Footer'; 

// This test suite groups related tests for the Footer component
describe('Footer Component', () => {

    // Test 1: Check if the component renders without crashing
    test('renders the Footer component', () => {
        render(<Footer />);
        // You could check for a main element or a piece of static text
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    // Test 2: Check for a specific piece of text or copyright year
    test('displays the correct copyright text', () => {
        // You might need to change the year or text to match your actual component
        const currentYear = new Date().getFullYear().toString();
        render(<Footer />);
        
        // Find text that contains the word "Copyright" and the current year
        const copyrightText = screen.getByText(/Copyright.*2025/i); 
        // Note: The /.../i is a case-insensitive regular expression.
        expect(copyrightText).toBeInTheDocument();
    });

    // Test 3: Check for a specific link or element if your Footer has one
    test('contains a link to the company website', () => {
        render(<Footer />);
        // Find a link element with a specific role and name (text content)
        const privacyLink = screen.getByRole('link', { name: /Privacy Policy/i });
        expect(privacyLink).toBeInTheDocument();
        // You can also check the 'href' attribute
        expect(privacyLink).toHaveAttribute('href', '/privacy'); 
    });
});