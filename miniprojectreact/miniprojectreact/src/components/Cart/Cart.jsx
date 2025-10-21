import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("cartItems21")) || [];
    setCartItems(items);
  }, []);

  // 🔹 Function to remove an item
  const removeFromCart = (id) => {
    let updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems21", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    objectFit: "cover",
                  }}
                />
                <span>{item.name}</span>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                ❌ Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
