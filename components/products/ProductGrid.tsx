import React from 'react';
import styled from 'styled-components';
import { ProductItem } from './ProductItem';
import { Product } from '@/interfaces';

interface ProductGridProps {
  products: Product[]
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <GridContainer>
      {products?.map((product, index) => (
        <ProductItem key={product.id} product={product} index={index} />
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;