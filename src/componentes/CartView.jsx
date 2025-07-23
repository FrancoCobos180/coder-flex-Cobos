import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartView = () => {
  const { cart, cartTotal, clear, removeItem } = useContext(CartContext);

  return (
    <div className="container my-4">
      <h2 className="mb-4">🛒 Tu Carrito</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((compra) => (
            <div
              key={compra.id}
              className="card mb-3 p-3 d-flex flex-row align-items-center gap-4"
            >
              <img
                src={compra.img}
                alt={compra.name}
                style={{ width: '8rem', height: 'auto', objectFit: 'cover' }}
              />

              <div className="flex-grow-1">
                <h5 className="mb-1">{compra.name}</h5>
                <p className="mb-1">Precio unitario: ${compra.price}</p>
                <p className="mb-1">Cantidad: {compra.quantity}</p>
                <strong>Subtotal: ${compra.price * compra.quantity}</strong>
              </div>

              <button
                className="btn btn-outline-danger"
                onClick={() => removeItem(compra.id)}
              >
                Eliminar
              </button>
            </div>
          ))}

          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total a pagar: ${cartTotal()}</h4>
            <div>
              <button className="btn btn-outline-danger me-2" onClick={clear}>
                Vaciar carrito
              </button>
              {/* Aquí está corregido el to a /checkout (todo minúscula) */}
              <Link to="/checkout" className="btn btn-dark">
                Terminar compra
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartView;
