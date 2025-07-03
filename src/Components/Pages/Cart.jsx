// src/Pages/Cart.jsx
import React from 'react';

const Cart = ({ cart = [] }) => {
  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 border rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">🛒 Your cart is empty</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-300">
            {cart.map((item, i) => (
              <li key={i} className="py-4 flex justify-between items-center">
                <span>{item.name}</span>
                <span className="font-medium">NRs {item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right text-xl font-bold">
            Total: NRs {total.toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
