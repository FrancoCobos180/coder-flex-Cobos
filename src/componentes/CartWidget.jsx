import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext); // Asegurate de que `CartContext` esté bien definido y envuelto en el árbol
  console.log(cart);

  // Contar cuántos items hay en total en el carrito
  const itemCount = cart.reduce((acc, item) => acc + item.cantidad, 0); // suponiendo que cada ítem tiene una propiedad 'cantidad'

  return (
    <div className="cart-widget">
      <img src="/carrito.jpg" alt="Carrito" width="30" />
      {itemCount > 0 && (
        <span className="cart-count">{itemCount}</span>
      )}
    </div>
  );
};

export default CartWidget;
