import styled from 'styled-components'
import { CartState, useCart } from "@/context/CartContext";
import { FaTrash } from 'react-icons/fa';

interface CartTableProps {
  cart: CartState
}

export const CartTable = ({cart}: CartTableProps) => {
  const { removeFromCart, decrementItem } = useCart();

  const getTotalPrice = () => {
    return cart.items
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <TableContainer>
    <Table>
      <thead>
        <tr>
          <TableHeader>Cantidad</TableHeader>
          <TableHeader>Producto</TableHeader>
          <TableHeader>$Total</TableHeader>
          <TableHeader></TableHeader>
        </tr>
      </thead>
      <tbody>
        {cart.items.map((item, index) => (
          <TableRow key={item.id} $isFirst={index === 0} $isLast={false}>
            <TableData>{item.quantity}</TableData>
            <TableData>{item.title}</TableData>
            <TableData>
              ${(item.price * item.quantity).toFixed(2)}
            </TableData>
            <TableData>
              <ActionContainer>
                <ActionButton onClick={() => decrementItem(item.id)}>
                  -
                </ActionButton>
                <ActionButton aria-label='Remove item' onClick={() => removeFromCart(item.id)}>
                  <FaTrash />
                </ActionButton>
              </ActionContainer>
            </TableData>
          </TableRow>
        ))}
        <TableRow $isFirst={false} $isLast={true}>
          <TableData>Total</TableData>
          <TableData></TableData>
          <TableData>${getTotalPrice()}</TableData>
        </TableRow>
      </tbody>
    </Table>
  </TableContainer>
  )
}

const TableContainer = styled.div`
  padding: 56px;
  width: 100%;
  max-width: 868px;
  background-color: #ffffff;
  margin-bottom: 80px;
  border-radius: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 24px;
`;

const TableHeader = styled.th`
  padding-bottom: 20px;
  text-align: left;
`;

const TableRow = styled.tr<{ $isFirst: boolean; $isLast: boolean }>`
  ${({ $isFirst }) =>
    $isFirst &&
    `
    td {
      border-top: none;
    }
  `}
  ${({ $isLast }) =>
    $isLast &&
    `
    td {
      border-bottom: none;
    }
  `}
  &:not(:last-child) {
    td {
      border-bottom: 1px solid #ddd;
    }
  }
  height: 80px;
`;

const TableData = styled.td`
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const Total = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  font-size: 14px;
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

const ActionContainer = styled.div`
  display: flex;
`;
