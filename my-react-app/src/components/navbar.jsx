import "./navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = ({ setIsCartOpen }) => {
    return (
        <ul className="topnav">

        <li>
            <Link to="/" className="logo"> Medi </Link>
        </li>

        <div className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li> <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
  <i className="fa-solid fa-cart-shopping"></i>
  <span className="cart-count">0</span>
</div> </li>
        </div>

        </ul>
        );
    };

export default Navbar;