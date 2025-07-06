import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
  return (
    <div className="col-md-4 col-sm-6 d-flex align-items-stretch my-3">
      <div className="card shadow-sm rounded mx-auto" style={{ width: '100%', maxWidth: '18rem' }}>
        <img
          src={prod.img}
          className="card-img-top"
          alt={prod.name}
          style={{ height: '180px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{prod.name}</h5>
          <p className="card-text fw-bold text-success">${prod.price.toLocaleString()}</p>
          <Link to={'/item/'+prod.id} className="btn btn-outline-primary mt-auto">Ver más</Link>
          
          
        </div>
      </div>
    </div>
  );
};

export default Item;

