import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./navbar.scss";

function Navbar() {
  return (
    <>
      
    <div className='nav'>
        <li><NavLink to = "/form1">FORM1</NavLink></li>
        <li><NavLink to = "/form2">FORM2</NavLink></li>
    </div>
    <div className='formm'>
     <Outlet/>
     </div>
    </>
  )
}

export default Navbar;