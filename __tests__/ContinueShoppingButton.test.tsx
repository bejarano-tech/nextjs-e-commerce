import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { ContinueShoppingButton } from '../components/ContinueShoppingButton';

afterEach(cleanup);

describe('ContinueShoppingButton', () => {
  it('renders the button with correct text', () => {
    render(<ContinueShoppingButton />);
    expect(screen.getByRole('link', { name: /SEGUIR COMPRANDO/i })).toBeDefined();
  });

  it('has correct href attribute', () => {
    render(<ContinueShoppingButton />);
    expect(screen.getByRole('link', { name: /SEGUIR COMPRANDO/i })).toHaveProperty('href', 'http://localhost:3000/');
  });
});
