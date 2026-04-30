function Cart({ cart, setCart, showCart, setShowCart }) {

  const removeItem = (name) => {
    setCart(prev => prev.filter(item => item.name !== name));
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-tab ${showCart ? "open" : ""}`}>
      
      <div className="cart-header">
        <h1>Cart</h1>

        <button onClick={() => setShowCart(false)}>
          Close
        </button>
      </div>

      <button className="clearCart" onClick={clearCart}>
        Clear Cart
      </button>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p style={{ padding: "10px" }}>Cart is empty</p>
        ) : (
          cart.map(item => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} className="cart-item-img" />

              <div className="cart-item-info">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>

              <button onClick={() => removeItem(item.name)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="cart-total">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
