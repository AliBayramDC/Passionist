import React, { useState } from 'react';
import './CartPage.css'; // Import your cart page styles

const CartPage = ({ cartItems }) => {
  const initialCart = cartItems.map(item => ({ ...item, quantity: 1 }));
  const [cart, setCart] = useState(initialCart);

  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cart.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cart.map(item =>
      item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    setCart(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total.toFixed(2); // Format total to two decimal places
  };

  const handlePayNow = () => {
    // In a real scenario, you would integrate with a payment gateway or API here
    alert('Payment successful! Thank you for your purchase.');
    // Clear the cart after successful payment
    setCart([]);
  };


  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <p className="item-name">{item.name}</p>
              <p className="item-price">Price: ${item.price}</p>
              <div className="item-quantity">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="payment-section">
        <p className="total-price">Total Price: ${calculateTotal()}</p>
        <button className="pay-now-button" onClick={handlePayNow}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default CartPage;
