import "./cart.css";

const Cart = ({ isOpen, setIsCartOpen, cart, removeFromCart, clearCart }) => {

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className={`cart-tab ${isOpen ? "open" : ""}`}>
      <h2 className="cart-header">Your Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      <div className="items-container">
      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.image} className="cart-item-img" />
          <div className="cart-item-info">
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-price">Price: ${item.price}</p>
            <p className="cart-item-quantity">Qty: {item.quantity}</p>
          </div>

          <button
            className="cart-item-remove"
            onClick={() => removeFromCart(item.name)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-bottom">
      <h3 className="cart-total">Total: ${total}</h3>

      <button className="clearCart" onClick={clearCart}>
        Clear Cart
      </button>

      <button className="closeCart" onClick={() => setIsCartOpen(false)}>
        Close
      </button>
      </div>
    </div>
    </div>
  );
};

export default Cart;