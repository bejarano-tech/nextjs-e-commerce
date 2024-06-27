import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useCart } from '@/context/CartContext';
import { CartState } from '@/context/CartContext';
import { FaTrash } from 'react-icons/fa';
import { CartTable } from '@/components/cart/CartTable';

vi.mock('@/context/CartContext', () => ({
  useCart: vi.fn(),
}));

const mockCart: CartState = {
  items: [
    {
      id: "1",
      title: 'Test Product 1',
      price: 200,
      quantity: 2,
    },
    {
      id: "2",
      title: 'Test Product 2',
      price: 200,
      quantity: 1,
    },
  ],
};

afterEach(cleanup);

describe('CartTable', () => {
  const removeFromCart = vi.fn();
  const decrementItem = vi.fn();

  beforeEach(() => {
    (useCart as vi.Mock).mockReturnValue({ removeFromCart, decrementItem });
  });

  it('renders the cart items correctly', () => {
    render(<CartTable cart={mockCart} />);
    expect(screen.getByText('Test Product 1')).toBeDefined();
    expect(screen.getByText('Test Product 2')).toBeDefined();
    expect(screen.getByText('$400.00')).toBeDefined();
    expect(screen.getByText('$200.00')).toBeDefined(); // 2 * 100
    expect(screen.getByText('$400.00')).toBeDefined(); // Total price
  });

  it('calls decrementItem when the decrement button is clicked', () => {
    render(<CartTable cart={mockCart} />);
    const decrementButtons = screen.getAllByText('-');
    fireEvent.click(decrementButtons[0]);
    expect(decrementItem).toHaveBeenCalledWith("1");
  });

  it('calls removeFromCart when the remove button is clicked', () => {
    render(<CartTable cart={mockCart} />);
    const removeButtons = screen.getAllByRole('button', { name: /trash/i });
    fireEvent.click(removeButtons[0]);
    expect(removeFromCart).toHaveBeenCalledWith("1");
  });

  it('renders the total price correctly', () => {
    render(<CartTable cart={mockCart} />);
    expect(screen.getByText('$400.00')).toBeDefined();
  });

  it('renders the table headers correctly', () => {
    render(<CartTable cart={mockCart} />);
    expect(screen.getByText('Cantidad')).toBeDefined();
    expect(screen.getByText('Producto')).toBeDefined();
    expect(screen.getByText('$Total')).toBeDefined();
  });
});
