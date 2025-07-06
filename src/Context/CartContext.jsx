
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem=(item,cantidad)=>{
    console.log(item,cantidad, 'desde el contexto')
  }

  return (
    <CartContext.Provider value={{ cart, addItem, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
