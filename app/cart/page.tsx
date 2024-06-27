"use client";
import { ContinueShoppingButton } from "@/components/ContinueShoppingButton";
import { Loader } from "@/components/Loader";
import { useCart } from "@/context/CartContext";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { EmptyCart } from "@/components/cart/EmptyCart";
import { CartTable } from "@/components/cart/CartTable";
export default function Cart() {
  const { cart, loading } = useCart();

  if (loading) {
    return <Loader />;
  }

  return (
    <CartContainer>
      <Title>Tu Carrito</Title>
      {cart.items.length > 0 ? (
        <CartTable cart={cart} />
      ) : (
        <EmptyCart />
      )}
      <ContinueShoppingButton />
    </CartContainer>
  );
}

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 980px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
  align-self: flex-start;
  margin-bottom: 32px;
`;
