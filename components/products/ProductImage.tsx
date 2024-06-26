import { Product } from '@/interfaces';
import Image from 'next/image'
import styled from "styled-components";

interface ProductImageProps {
  product: Product
  index: number
}

interface PriceTagProps {
  position: number
}

export const ProductImage = ({product, index}: ProductImageProps) => {
  return (
    <ImageContainer>
    <ProductImageStyled>
      <Image
        src={product.image}
        alt={`Product Image ${product.title}`}
        sizes="300px"
        fill
        style={{
          objectFit: 'contain',
        }}
      />
    </ProductImageStyled>
    <PriceTag position={index} >{`USD ${product.price}`}</PriceTag>
    <AddToCartButton>+</AddToCartButton>
  </ImageContainer>
  )
}

const ImageContainer = styled.div`
  position: relative;
`;

const ProductImageStyled = styled.div`
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