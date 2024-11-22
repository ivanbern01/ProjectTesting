// File: tests/Header.test.jsx

import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  it('renders the logo and university titles correctly', () => {
    const { getByAltText, getByText } = render(<Header />);

    expect(getByAltText('CvSU Logo')).toBeInTheDocument();
    expect(getByText('CAVITE STATE UNIVERSITY')).toBeInTheDocument();
    expect(getByText('BACOOR CAMPUS')).toBeInTheDocument();
  });
});
