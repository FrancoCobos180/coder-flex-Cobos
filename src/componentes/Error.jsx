import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className="error-container">
      <div className="error-image-wrapper">
        <img
          src="https://i.postimg.cc/jSGRxH3K/temp-Image-S9gfy-B.avif"
          alt="Error 404"
          className="error-image"
        />
      </div>
      <p className="error-text">Oops! La página que buscas no existe.</p>
      <Link to="/" className="error-link">Volver al inicio</Link>
    </div>
  );
};

export default Error;
