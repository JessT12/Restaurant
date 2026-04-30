import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Cart from "./components/cart.jsx";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // ADD ITEM
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);

      if (existing) {
        return prev.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // REMOVE ITEM
  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  // CLEAR CART
  const clearCart = () => setCart([]);

  return (
    <>
      <Navbar setIsCartOpen={setIsCartOpen} cart={cart} />

      <Cart
        isOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />

      <Outlet context={{ addToCart }} />
    </>
  );
}

export default App;