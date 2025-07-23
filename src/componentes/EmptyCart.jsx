import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '60vh' }}>
      <img src="https://i.postimg.cc/t42kzJVn/temp-Image-Zd-Vpia.avif" alt="Carrito vacío" style={{ width: '150px', marginBottom: '20px', opacity: 0.7 }} />
      <h2 className="mb-3">¡Tu carrito está vacío!</h2>
      <p className="mb-4">Parece que aún no agregaste nada. Te invitamos a ver nuestros productos.</p>
      <Link className="btn btn-dark px-4 py-2" to="/">Ir a comprar</Link>
    </div>
  );
};

export default EmptyCart;
