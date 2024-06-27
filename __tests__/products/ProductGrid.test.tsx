import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { Product } from '@/interfaces';
import { ProductGrid } from '@/components/products/ProductGrid';
import { CartProvider } from '@/context/CartContext';

afterEach(cleanup);

vi.mock('./ProductItem', () => ({
  ProductItem: ({ product }: { product: Product }) => <div>{product.title}</div>,
}));

const mockProducts: Product[] = [
  {
    id: "1",
    title: 'Test Product 1',
    description: 'This is a test 1',
    price: 100,
    image: 'http://example.com/image1.jpg',
    category: 'Test Category 1',
    rating: {
      count: 1,
      rate: 1
    }
  },
  {
    id: "2",
    title: 'Test Product 2',
    description: 'This is a test 2',
    price: 200,
    image: 'http://example.com/image2.jpg',
    category: 'Test Category 2',
    rating: {
      count: 1,
      rate: 1
    }
  },
  {
    id: "3",
    title: 'Test Product 3',
    description: 'This is a test 3',
    price: 300,
    image: 'http://example.com/image3.jpg',
    category: 'Test Category 3',
    rating: {
      count: 1,
      rate: 1
    }
  },
];

describe('ProductGrid', () => {
  it('renders the correct number of ProductItem components', () => {
    render(
      <CartProvider>
        <ProductGrid products={mockProducts} />
      </CartProvider>
    );
    const productItems = screen.getAllByText(/Test Product/i);
    expect(productItems).toHaveLength(mockProducts.length);
  });

  it('renders ProductItem with correct props', () => {
    render(
      <CartProvider>
        <ProductGrid products={mockProducts} />
      </CartProvider>
    );
    mockProducts.forEach(product => {
      expect(screen.getByText(product.title)).toBeDefined();
    });
  });

});
