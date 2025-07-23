import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../service/firebase'; // asegurate que esta ruta sea correcta
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const { itemid } = useParams();

  useEffect(() => {
    setCargando(true);
    const docRef = doc(db, 'productos', itemid);

    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProducto({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.error("Error al obtener el producto:", error))
      .finally(() => setCargando(false));
  }, [itemid]);

  if (cargando) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <div className="spinner"></div>
        <p>Cargando producto...</p>
      </div>
    );
  }

  if (invalid) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: '#f8f8f8',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7486/7486796.png"
          alt="No encontrado"
          style={{ width: '96px', height: '96px', marginBottom: '20px', opacity: 0.7 }}
        />
        <h2 style={{ fontSize: '24px', color: '#444', marginBottom: '12px' }}>Producto no encontrado</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Es posible que el producto haya sido eliminado o el enlace sea incorrecto.
        </p>
        <Link
          to="/"
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '6px',
            textDecoration: 'none',
            boxShadow: '0 4px 6px rgba(37, 99, 235, 0.5)',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1e40af'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

 

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
