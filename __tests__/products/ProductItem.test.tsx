import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { ProductItem } from '@/components/products/ProductItem';
import { Product } from '@/interfaces';
import { CartProvider } from '@/context/CartContext';
import Image from 'next/image'

vi.mock('./ProductImage', () => ({
  ProductImage: ({ product }: { product: Product }) => <Image src={product.image} alt={product.title} />,
}));

afterEach(cleanup);

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

describe('ProductItem', () => {
  it('renders the product title', () => {
    render(
      <CartProvider>
        <ProductItem product={mockProduct} index={0} />
      </CartProvider>
    );
    expect(screen.getByText('Test Product')).toBeDefined();
  });
  
  it('renders the product description', () => {
    render(
      <CartProvider>
        <ProductItem product={mockProduct} index={0} />
      </CartProvider>
    );
    expect(screen.getByText('This is a test product')).toBeDefined();
  });

  it('renders the product image', () => {
    render(
      <CartProvider>
        <ProductItem product={mockProduct} index={0} />
      </CartProvider>
    );
    const image = screen.getByAltText('Product Image Test Product');
    expect(image).toBeDefined();
    expect(image).toHaveProperty('src', 'http://localhost:3000/_next/image?url=http%3A%2F%2Fexample.com%2Fimage.jpg&w=3840&q=75');
  });
});
