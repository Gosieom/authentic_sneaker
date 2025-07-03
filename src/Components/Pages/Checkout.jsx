import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Grab passed product from previous page (Buy Now button)
  const { product, discountedPrice } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        PAYMENT DETAILS
      </h1>

      {product && (
        <div className="mb-6 p-4 border border-gray-300 rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Product Summary</h2>
          <div className="flex items-center gap-4">
            <img src={product.image} alt={product.name} className="w-20 h-20 object-contain" />
            <div>
              <p><strong>Name:</strong> {product.name}</p>
              <p><strong>Price:</strong> {product.price} Nrs</p>
              <p><strong>Discount:</strong> {product.discount} Nrs</p>
              <p><strong>Total:</strong> <span className="text-green-600 font-bold">{discountedPrice} Nrs</span></p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">City</label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Card Number</label>
          <input
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            maxLength={16}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Expiry Date</label>
            <input
              name="expiry"
              type="month"
              value={formData.expiry}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex-1">
            <label className="block mb-1 font-medium">CVV</label>
            <input
              name="cvv"
              type="password"
              maxLength={3}
              value={formData.cvv}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
