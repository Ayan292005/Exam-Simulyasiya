import React, { useContext } from 'react'
import {NavLink} from "react-router-dom"
import { FaHeart } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { favoritesContext } from '../../context/FavoritesContext';

function Navbar() {
    let { favorites, setFavorites } = useContext(favoritesContext)
  
  return (
    <>
      <div style={{ backgroundColor: "#f9f9ff" }}>
        <div className="cont navbar-top">
          <div style={{ display: 'flex', gap: '30px' }}>
            <p>+12312-3-1209</p>
            <p>support@colorlib.com</p>
          </div>
          <p>LOGIN</p>
        </div>
      </div>
      <div className='cont-2'>
        <div className="navbar-bottom">
          <img src="	https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
          <div className="nav-menu" style={{fontSize:"30px",display:"none"}}> 
          <CgMenu />
          </div>
          <div className="links">
            <NavLink to="">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/add">Add Product</NavLink>
            <NavLink to="/favorites"><FaHeart /><span>{favorites.length}</span></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
