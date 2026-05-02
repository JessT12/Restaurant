function Cart({ isOpen, setIsCartOpen, cart, removeFromCart, clearCart, updateQuantity }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-tab ${isOpen ? "open" : ""}`}>

      {/* Header */}
      <div className="cart-header">Your Cart</div>

      <div className="items-container">
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-img" src={item.image} alt={item.name} />

            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">${item.price}</p>
              <div className="cart-qty-controls">
                <button onClick={() => updateQuantity(item.name, -1)}>-</button>
                <span>Qty: {item.quantity}</span>
                <button onClick={() => updateQuantity(item.name, 1)}>+</button>
              </div>
            </div>

            <button
              className="cart-item-remove"
              onClick={() => removeFromCart(item.name)}
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

        <button className="closeCart" onClick={() => setIsCartOpen(false)}>
          Close
        </button>

      </div>

    </div>
  );
}

export default Cart;
