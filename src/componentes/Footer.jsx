import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  const footerStyle = {
    backgroundColor: "#222",
    color: "#fff",
    padding: "40px 20px",
    marginTop: "40px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
  };

  const sectionStyle = {
    flex: 1,
    minWidth: "200px",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    marginBottom: "15px",
    color: "#ffcc00",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const linkStyle = {
    color: "#fff",  
    textDecoration: "none",
    transition: "color 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "8px",
  };

  const iconStyle = {
    fontSize: "1.2rem",
  };

  const copyStyle = {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "0.9rem",
    color: "#aaa",
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = "#ffcc00";  // azul más oscuro al pasar mouse
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = "#fff";  // azul original
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <img
            src="/logo.png"
            alt="Dec Hogar Logo"
            style={{ width: '120px', marginBottom: '15px' }}
          />
          <h4 style={titleStyle}>Dec Hogar</h4>
          <p>Calidad y confort para tu hogar.</p>
        </div>

        <div style={sectionStyle}>
          <h4 style={titleStyle}>Navegación</h4>
          <ul style={listStyle}>
            <li>
              <a
                href="/"
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/category/respaldos"
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Respaldos
              </a>
            </li>
            <li>
              <a
                href="/category/almohadas"
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Almohadas
              </a>
            </li>
            <li>
              <a
                href="/cart"
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Carrito
              </a>
            </li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h4 style={titleStyle}>Redes Sociales</h4>
          <ul style={listStyle}>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <FaFacebookF style={iconStyle} />
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <FaInstagram style={iconStyle} />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <FaTwitter style={iconStyle} />
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={copyStyle}>© 2025 Dec Hogar. Todos los derechos reservados.</div>
    </footer>
  );
};

export default Footer;
