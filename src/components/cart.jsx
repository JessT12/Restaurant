import "./cart.css";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

function Cart({ isOpen, setIsCartOpen, cart, removeFromCart, clearCart, updateQuantity }) {
const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    
  const placeOrder = async () => {
    if (cart.length === 0) return;

    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart,
          total,
        }),
      });

      const data = await res.json();
      console.log("Order saved:", data);

      clearCart();
      setIsCartOpen(false);

    } catch (err) {
      console.log("Order failed:", err);
    }
  };

  return (
    <div className={`cart-tab ${isOpen ? "open" : ""}`}>

      {/* Header */}
      <div className="cart-header">Your Cart</div>
      <div className="items-container">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img className="cart-item-img" src={item.image} alt={item.name} />

            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">${item.price}</p>
              <div className="cart-qty-controls">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>Qty: {item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>

            <button
              className="cart-item-remove"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Footer (always at bottom) */}
      <div className="cart-bottom">

        <div className="cart-summary">
          <button className="clearCart" onClick={clearCart}>
            Clear Cart
          </button>

          <div className="cart-total">
            Total: ${total}
          </div>
        </div>

        <button className="place-order" onClick={placeOrder}>Place Order</button>

        <button className="closeCart" onClick={() => setIsCartOpen(false)}>
          Close
        </button>

      </div>

    </div>
  );
}

export default Cart;
