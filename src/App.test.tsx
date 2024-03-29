import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Test', () => {
  test('should render without failed', () => {
    render(<App />);
    const text = screen.getByText('Welcome to React Typescript Starter');
    expect(text).toBeInTheDocument();
  });
});
