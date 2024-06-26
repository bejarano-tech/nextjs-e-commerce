import { Product } from "@/interfaces";
import styled from "styled-components";
import { ProductImage } from "./ProductImage";

interface ProductItemProps {
  product: Product
  index: number
}

export const ProductItem = ({ product, index }: ProductItemProps) => {
  return (
    <ItemContainer>
      <ProductImage product={product} index={index} />
      <ContentContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
      </ContentContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ProductTitle = styled.h3`
  font-size: 18px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
`;

const ContentContainer = styled.div`
 padding: 30px 24px;
`