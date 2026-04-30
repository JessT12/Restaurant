import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul class="topnav">

        <li>
            <Link to="/" className="logo"> Medi </Link>
        </li>

        <div className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li> <a href="#" class="cart-icon"> <i class="fa-solid fa-cart-shopping"></i> <span class="cart-count">0</span> </a> </li>
        </div>

        </ul>
        );
    }

export default Navbar;