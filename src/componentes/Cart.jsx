import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import CartView from './CartView.JSX';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.length ? <CartView /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
