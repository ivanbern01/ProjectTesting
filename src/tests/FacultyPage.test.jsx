import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FacultyPage from '../pages/FacultyPage';

describe('FacultyPage Component', () => {
  test('renders faculty login title', () => {
    render(<FacultyPage />);
    const title = screen.getByText(/Faculty Login/i);
    expect(title).toBeInTheDocument();
  });

  test('renders CvSU Email input', () => {
    render(<FacultyPage />);
    const emailInput = screen.getByPlaceholderText(/Enter your CvSU Email here/i);
    expect(emailInput).toBeInTheDocument();
  });

  test('renders password input', () => {
    render(<FacultyPage />);
    const passwordInput = screen.getByPlaceholderText(/Enter your password/i);
    expect(passwordInput).toBeInTheDocument();
  });
});
