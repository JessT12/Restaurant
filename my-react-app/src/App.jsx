import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Cart from "./components/cart.jsx";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
    <Navbar setIsCartOpen={setIsCartOpen} />
    <Cart isOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    <Outlet />
    </>
  );
}

export default App;