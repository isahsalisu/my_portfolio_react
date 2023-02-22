
import React from 'react';
import { NavLink } from "react-router-dom";
function Header (){
    return (

          // <header>
        <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink> 
      <NavLink to="/contact">Contacts</NavLink>
        </nav>  

        // </header>  
    )
}
export default Header;





