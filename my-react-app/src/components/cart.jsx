import "./cart.css";

const Cart = ({ isOpen, setIsCartOpen }) => {
  const cart = [];

  return (
    <div className={`cart-tab ${isOpen ? "open" : ""}`}>
      <h2 className="cartHeader">Your Cart</h2>
      <button className="closeCart" onClick={() => setIsCartOpen(false)}>Close</button>
    </div>
  );
};

export default Cart;