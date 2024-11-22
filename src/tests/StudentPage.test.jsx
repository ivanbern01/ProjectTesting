import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StudentPage from '../pages/StudentPage';

describe('StudentPage Component', () => {
  test('renders student login title', () => {
    render(<StudentPage />);
    const title = screen.getByText(/Student Login/i);
    expect(title).toBeInTheDocument();
  });

  test('renders student ID input', () => {
    render(<StudentPage />);
    const studentIDInput = screen.getByPlaceholderText(/Enter your student ID/i);
    expect(studentIDInput).toBeInTheDocument();
  });

  test('renders password input', () => {
    render(<StudentPage />);
    const passwordInput = screen.getByPlaceholderText(/Enter your password/i);
    expect(passwordInput).toBeInTheDocument();
  });
});
