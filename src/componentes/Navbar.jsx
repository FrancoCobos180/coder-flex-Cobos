import CartWidget from "./CartWidget"

const Navbar =() => {
    return(
      <nav className="nav-container">
        <div className="brand">
        <img src="/logo.png" alt="Logo Dec Hogar" className="logo" />
        
        </div>
        <div className="a-container">
          <a href="">Colchones</a>
          <a href="">Respaldos</a>
          <a href="">Almohadas</a>
        </div>
        <CartWidget/>
  
      </nav>
    )
  }
  export default Navbar