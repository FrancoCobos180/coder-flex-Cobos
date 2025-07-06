import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const comprar = () => {
    if (typeof onAdd === 'function') {
      onAdd(count);
    } else {
      console.warn('La función onAdd no fue pasada correctamente al componente ItemCount');

    }
  };

  return (
    <div>
      <div>
        <button className="btn btn-danger" onClick={restar}>-</button>
        <span className="btn">{count}</span>
        <button className="btn btn-success" onClick={sumar}>+</button>
      </div>
      <button className="btn btn-primary mt-2" onClick={comprar}>
        Agregar al carrito
      </button>
    </div>
  );
};



export default ItemCount;