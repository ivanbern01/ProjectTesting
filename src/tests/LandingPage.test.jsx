import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import LandingPage from '../pages/LandingPage';

describe('LandingPage Component', () => {
  test('renders CvSU heading', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    const heading = screen.getByText(/CvSU - Bacoor Campus/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders Truth, Excellence, Service slogan', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    const slogan = screen.getByText(/TRUTH · EXCELLENCE · SERVICE/i);
    expect(slogan).toBeInTheDocument();
  });

  test('renders navbar links', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    const homeLink = screen.getByText(/Home/i);
    const profileLink = screen.getByText(/Profile/i);
    expect(homeLink).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });
});
