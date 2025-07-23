import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const Navbar =() => {
    return(
      <nav className="nav-container">
        <div className="brand">
          <NavLink to='/'>
          <img src="/logo.png" alt="Logo Dec Hogar" className="logo" />
          </NavLink>
        
        
        </div>
        <div className="a-container">
          <NavLink to="/category/colchones">Colchones</NavLink>
          <NavLink to="/category/respaldos">Respaldos</NavLink>
          <NavLink to="/category/almohadas">Almohadas</NavLink>
        </div>
        <NavLink to='/cart' style={{textDecoration:'none'}}>
        <CartWidget/>
        </NavLink>
        
  
      </nav>
    )
  }
  export default Navbar
