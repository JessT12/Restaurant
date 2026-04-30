import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";

function App() {
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (showCart) {
      document.body.classList.add("showCart");
    } else {
      document.body.classList.remove("showCart");
    }
  }, [showCart]);




  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name);

      if (existing) {
        return prev.map(i =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });

    // notification
    setMessage(`${item.name} added to cart`);
    setTimeout(() => setMessage(""), 2000);
  };
  return (
    <>
    <Navbar cart={cart} />
    <Outlet context={{ cart, addToCart, message }} />

    {message && <div className="notification">{message}</div>}
    </>
  );
}

export default App;