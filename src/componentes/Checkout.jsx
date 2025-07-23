import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [validateEmail, setValidetEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const { cart, cartTotal,clear } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();

    if(!buyer.name || !buyer.address || !buyer.email){
        alert('Todos los campos son Requeridos!')
    } else if(buyer.email !== validateEmail){
        alert('Los Correos no Coinciden')
    }else{

    const orden = {
      comprador: buyer,
      compras: cart,
      total: cartTotal(),
      date: serverTimestamp()
    };

    const ventas = collection(db, "orders");
    addDoc(ventas, orden)
      .then((res) => {
        setOrderId(res.id);
        clear()
      })
      .catch((error) => console.log(error));
    }
  };

  return (
    <>
      {orderId ? (
        <div>
          <h2>Generaste completamente tu orden</h2>
          <h2>El ID es: {orderId}</h2>
          <Link to='/' className='btn btn-dark'>Volver al Home</Link>
        </div>
      ) : (
        <div className="container my-5">
          <h1 className="mb-4 text-center">📝 Completa con tus Datos</h1>

          <form className="row g-3 mx-auto" onSubmit={finalizarCompra} style={{ maxWidth: '500px' }}>
            <div className="col-12">
              <input
                className="form-control"
                placeholder="Nombre completo"
                type="text"
                name="name"
                onChange={buyerData}
              />
            </div>

            <div className="col-12">
              <input
                className="form-control"
                placeholder="Dirección"
                type="text"
                name="address"
                onChange={buyerData}
              />
            </div>

            <div className="col-12">
              <input
                className="form-control"
                placeholder="Correo electrónico"
                type="email"
                name="email"
                onChange={buyerData}
              />
            </div>

            <div className="col-12">
              <input
                className="form-control"
                placeholder="Repetir correo electrónico"
                type="email"
                name="email2"
                onChange={(e) => setValidetEmail(e.target.value)}
              />
            </div>

            <div className="col-12 d-grid">
              <button className="btn btn-success" type="submit">
                Finalizar Compra
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
