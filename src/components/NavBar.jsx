import React from 'react';

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link to= "/" className="logo"><h1>App Arte</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
            <li><Link className="menu-link" to="/productos">Poductos</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><Link className="menu-link" to="/productos/Arte-pop">Arte-pop</Link></li>
            <li><Link className="menu-link" to="/productos/Surrealismo">Surrealismo</Link></li>
            <li><Link className="menu-link" to="/productos/Impresionismo">Impresionismo</Link></li>

        </ul>
    </nav>
  )
}

export default NavBar;