import { ReactNode } from "react";
import styled from "styled-components";
import Link from 'next/link'

export const ContinueShoppingButton = () => {
  return (
    <Button href="/">
      SEGUIR COMPRANDO
    </Button>
  )
}

const Button = styled(Link)`
  display: flex;
  margin-bottom: 80px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  text-decoration: none;
  background-color: #bbc0dd;
  border: 2px solid #DEDEDE;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  height: 75px;

  @media (min-width: 768px) {
    width: 400px;
  }

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`;