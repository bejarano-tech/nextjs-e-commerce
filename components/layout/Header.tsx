"use client";
import styled from "styled-components";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useSearch } from "@/context/SearchContext";

interface HeaderProps {
  showSearch?: boolean;
}

export const Header = ({ showSearch = true }: HeaderProps) => {
  const { cart } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();
  const totalItems = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <HeaderContainer>
      <Link href="/">
        <Image
          src="/somnio.svg"
          alt="Somnio Logo"
          height={80}
          width={150}
          priority
        />
      </Link>
      {showSearch ? (
        <SearchContainer>
          <SearchInput
            placeholder="Buscar Productos ..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <SearchIcon>
            <FaSearch size={20} color="#88939D" />
          </SearchIcon>
        </SearchContainer>
      ) : null}
      <CartIcon href="/cart">
        <FaShoppingCart size={40} color="#FFFFFF" />
        {totalItems > 0 ? <ItemCount>{totalItems}</ItemCount> : null}
      </CartIcon>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  align-items: center;
  padding: 10px 20px;
  background-color: #bbc0dd;

  @media (max-width: 767px) {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    row-gap: 10px;
  }
`;

const CartIcon = styled(Link)`
  grid-column: 3 / 4;
  justify-self: end;
  position: relative;

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
    color: #c3c8cd;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemCount = styled.span`
  position: absolute;
  left: -10px;
  bottom: -10px;
  background-color: #b4b4b4;
  border-radius: 50%;
  border: 1px solid #9da0a4;
  padding: 4px 8px;
  font-size: 14px;
`;
