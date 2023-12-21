import React from "react";

function Header() {
    return(
        <header>
        <a href="#" className="logo">
          <img src="src/assets/employees.png" width="40"/>
          Gestion de Empleados
        </a>
        <nav className="navbar">
          <a href="#">Inicio</a>
          <a href="#">Empleados</a>
          <a href="#">Nomina</a>
        </nav>
      </header>
    );
}

export default Header;