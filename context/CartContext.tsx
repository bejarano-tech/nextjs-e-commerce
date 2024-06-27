"use client"
import { createContext, useContext, useReducer, useEffect, ReactNode, useState } from 'react';

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
  removeFromCart: (productId: string) => void;
  decrementItem: (productId: string) => void;
  loading: boolean;
}

const initialCartState: CartState = {
  items: []
};

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: CartState, action: any): CartState => {
  switch (action.type) {
    case 'INITIALIZE_CART':
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
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case 'DECREMENT_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ).filter(item => item.quantity > 0)
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const storedCartParsed = JSON.parse(storedCart as string)
    if (storedCartParsed?.items.length > 0) {
      dispatch({ type: 'INITIALIZE_CART', payload: storedCartParsed });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const decrementItem = (productId: string) => {
    dispatch({ type: 'DECREMENT_ITEM', payload: productId });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decrementItem, loading }}>
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
