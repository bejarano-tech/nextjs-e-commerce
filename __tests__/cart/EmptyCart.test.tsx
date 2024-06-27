import { EmptyCart } from '@/components/cart/EmptyCart';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('EmptyCart', () => {
  it('renders the empty cart message', () => {
    render(<EmptyCart />);
    expect(screen.getByText('Tu carrito está vacío')).toBeDefined();
  });
});
