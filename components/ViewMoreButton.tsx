import { FaEye } from "react-icons/fa"
import styled from "styled-components";

interface ViewMoreButtonProps {
  onClick: () => void
  loading: boolean
}

export const ViewMoreButton = ({onClick, loading}: ViewMoreButtonProps) => {
  return (
    <Button onClick={onClick} disabled={loading} >
      {loading ? 'CARGANDO' : <><FaEye size={24} />VER MÁS</> }
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  background-color: #fff;
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