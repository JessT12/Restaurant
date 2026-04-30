import "./menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <main className="body-menu">
      <p className="menu-title">Menus</p>

      <div className="wrapper">
        <Link to="/food" className="card card-link">
          <img
            src="https://thedefineddish.com/wp-content/uploads/2025/08/Mediterranean-Ground-Beef-Stir-Fry-6-scaled.jpg"
            alt="Food menu"
          />
          <div className="container">
            <h4>Food Menu</h4>
          </div>
        </Link>

        <Link to="/drinks" className="card card-link">
          <img
            src="https://cdn.shopify.com/s/files/1/2255/5671/files/rosecocktails_1024x1024.jpg?v=1529662356"
            alt="Drinks menu"
          />
          <div className="container">
            <h4>Drinks Menu</h4>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Menu;