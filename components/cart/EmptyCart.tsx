import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <Message>Tu carrito está vacío</Message>
    </EmptyCartContainer>
  );
};

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

const Message = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
  border: 1px solid #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;
