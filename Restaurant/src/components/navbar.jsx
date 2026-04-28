function Navbar() {
  return (
    <ul className="topnav">

      <li>
        <a className="logo" href="index.html">
          Medi
        </a>
      </li>

      {/* Hamburger checkbox */}
      <input type="checkbox" id="menu-toggle" />

      <label htmlFor="menu-toggle" className="hamburger">
        &#9776;
      </label>

      <div className="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="Menu.html">Menu</a></li>
        <li><a href="Contact.html">Contact</a></li>
        <li><a href="About.html">About</a></li>

        <li>
          <a href="#" className="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count">0</span>
          </a>
        </li>
      </div>

    </ul>
  );
}

export default Navbar;