import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Wrap with Router
import LoginPage from '../pages/LoginPage'; // Adjust the import according to your folder structure

describe('LoginPage', () => {
  test('renders login page content', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    // Check if the header and buttons render correctly
    expect(screen.getByText(/Please select your destination/i)).toBeInTheDocument();
    expect(screen.getByText(/Faculty Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Student Login/i)).toBeInTheDocument();

    // Check if disclaimers are rendered
    expect(screen.getByText(/By using this service, you agree to the CvSU Online Services/i)).toBeInTheDocument();
  });

  test('navigates to FacultyPage on clicking Faculty Login', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    fireEvent.click(screen.getByText(/Faculty Login/i));

    // Check if the navigation works by ensuring URL changes
    expect(window.location.pathname).toBe('/FacultyPage');
  });

  test('navigates to StudentPage on clicking Student Login', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    fireEvent.click(screen.getByText(/Student Login/i));

    // Check if the navigation works by ensuring URL changes
    expect(window.location.pathname).toBe('/StudentPage');
  });
});
