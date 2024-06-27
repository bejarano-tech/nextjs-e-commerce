import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Product } from '@/interfaces';
import { useCart } from '@/context/CartContext';
import { ProductImage } from '@/components/products/ProductImage';
import Image from 'next/image'

afterEach(cleanup);

// Mock de useCart
vi.mock('@/context/CartContext', () => ({
  useCart: vi.fn(),
}));

const mockProduct: Product = {
  id: "1",
  title: 'Test Product',
  description: 'This is a test product',
  price: 100,
  image: 'http://example.com/image.jpg',
  category: 'Test Category',
  rating: {
    count: 1,
    rate: 1
  }
};

describe('ProductImage', () => {
  const addToCart = vi.fn();

  beforeEach(() => {
    (useCart as vi.Mock).mockReturnValue({ addToCart });
  });

  it('renders the product image', () => {
    render(<ProductImage product={mockProduct} index={0} />);
    const image = screen.getByAltText(`Product Image ${mockProduct.title}`);
    expect(image).toBeDefined();
    expect(image).toHaveProperty('src', 'http://localhost:3000/_next/image?url=http%3A%2F%2Fexample.com%2Fimage.jpg&w=3840&q=75');
  });

  it('renders the price tag', () => {
    render(<ProductImage product={mockProduct} index={0} />);
    const priceTag = screen.getByText(`USD ${mockProduct.price}`);
    expect(priceTag).toBeDefined();
  });

  it('calls addToCart when add to cart button is clicked', () => {
    render(<ProductImage product={mockProduct} index={0} />);
    const button = screen.getByText('+');
    fireEvent.click(button);
    expect(addToCart).toHaveBeenCalledWith({ id: mockProduct.id, title: mockProduct.title, price: mockProduct.price, quantity: 1 });
  });

  it('renders the add to cart button', () => {
    render(<ProductImage product={mockProduct} index={0} />);
    const button = screen.getByText('+');
    expect(button).toBeDefined();
  });
});
