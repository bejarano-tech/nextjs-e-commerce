"use client"
import styled from 'styled-components';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import Image from 'next/image';

export const Header = () => {
  return (
    <HeaderContainer>
      <Image src="/somnio.svg" alt='Somnio Logo' height={80} width={150}  />
      <SearchContainer>
        <SearchInput placeholder="Buscar Productos ..." />
        <SearchIcon>
          <FaSearch size={20} color='#88939D'/>
        </SearchIcon>
      </SearchContainer>
      <CartIcon>
        <FaShoppingCart size={40} color='#FFFFFF'/>
      </CartIcon>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  align-items: center;
  padding: 10px 20px;
  background-color: #BBC0DD;

  @media (max-width: 767px) {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    row-gap: 10px;
  }
`;

const Logo = styled.div`
  grid-column: 1 / 2;
  font-size: 24px;
  font-weight: bold;
`;

const CartIcon = styled.div`
  grid-column: 3 / 4;
  justify-self: end;

  @media (max-width: 767px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  grid-column: 2 / 3;
  @media (max-width: 767px) {
    max-width: none;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    justify-self: stretch;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  padding-left: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  &::placeholder {
    color: #C3C8CD;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
