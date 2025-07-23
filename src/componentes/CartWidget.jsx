import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      <img src="/carrito.jpg" alt="Carrito" width="30" />
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </div>
  );
};

export default CartWidget;

