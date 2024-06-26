import { Product } from "@/interfaces";
import styled from "styled-components";
import Image from 'next/image';

interface ProductItemProps {
  product: Product
  index: number
}

interface PriceTagProps {
  position: number
}

export const ProductItem = ({ product, index }: ProductItemProps) => {
  return (
    <ItemContainer>
      <ImageContainer>
        <ProductImage>
          <Image
            src={product.image}
            alt={`Product Image ${product.title}`}
            sizes="300px"
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </ProductImage>
        <PriceTag position={index} >{`USD ${product.price}`}</PriceTag>
        <AddToCartButton>+</AddToCartButton>
      </ImageContainer>
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

const ImageContainer = styled.div`
  position: relative;
`;

const ProductImage = styled.div`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const PriceTag = styled.div<PriceTagProps>`
  position: absolute;
  bottom: 40px;
  right: 0px;
  height: 50px;
  background-color: ${(props) =>
    props.position % 3 === 0
      ? '#908BC7'
      : props.position % 3 === 1
      ? '#95C3CA'
      : '#C5CA90'};
  color: #000;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-size: 32px;
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  position: absolute;
  top: 35px;
  left: 35px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #000;
  width: 50px;
  height: 50px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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