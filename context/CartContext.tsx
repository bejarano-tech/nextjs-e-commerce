"use client"
import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface CartContextProps {
  cart: CartState;
  addToCart: (product: CartItem) => void;
}

const initialCartState: CartState = {
  items: []
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: CartState, action: any): CartState => {
  switch (action.type) {
    case 'INITIALIZE_CART':
      console.log(action.payload.items)
      return {
        ...state,
        items: action.payload.items
      };
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };
    default:
      return state;
  }
};

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const storedCartParsed = JSON.parse(storedCart as string)
    if (storedCartParsed?.items.length > 0) {
      dispatch({ type: 'INITIALIZE_CART', payload: storedCartParsed });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
