import React, { useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
  const [mensaje, setMensaje] = useState('');
  console.log('Producto recibido:', producto);


  if (!producto) return <p>Cargando producto...</p>;

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} del item ${producto.name}`);
    setMensaje(`Agregaste ${cantidad} ${producto.name} al carrito`);
  };

  return (
    <div className="container my-4">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={producto.img}
            alt={producto.name}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h2>{producto.name}</h2>
          <p>{producto.description}</p>
          <h4 className="text-success">${producto.price.toLocaleString()}</h4>
          <p><strong>Stock:</strong> {producto.stock}</p>

          
          <ItemCount stock={producto.stock} onAdd={onAdd} />
          

          {mensaje && (
            <div className="alert alert-success mt-3">{mensaje}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
