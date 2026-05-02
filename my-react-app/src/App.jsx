import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Cart from "./components/cart.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  //Add item to cart
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);//check to see if the item is already in the cart

      if (existing) {//if exists, increase quantity by 1
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

    //Update quantity of item in cart
    const updateQuantity = (name, amount) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0) // removes item if 0
    );
  };

  //Remove item from cart
  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  //Clear cart
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
        updateQuantity={updateQuantity}
      />

      <Outlet context={{ addToCart }} />

      <Footer />
    </>
  );
}

export default App;