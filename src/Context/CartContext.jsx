
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    const existingIndex = cart.findIndex((prod) => prod.id === item.id);

    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += cantidad;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: cantidad }]);
    }
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const cartTotal = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, setCart, cartQuantity, cartTotal, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};
