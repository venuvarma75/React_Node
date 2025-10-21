import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="list-group mb-3">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              {item.name}
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}
      <h4>Total: ₹{total}</h4>
    </div>
  );
};

export default Cart;
