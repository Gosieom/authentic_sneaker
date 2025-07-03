import React, { useState, useEffect } from "react";
import hero1 from "./assets/Hero.png";
import hero2 from "./assets/Hero1.png";
import hero3 from "./assets/Hero2.png";
import hero4 from "./assets/Hero3.png";

const slides = [
  {
    image: hero1,
    name: "Nike Air Max",
    price: 12000,
  },
  {
    image: hero2,
    name: "Adidas UltraBoost",
    price: 11000,
  },
  {
    image: hero3,
    name: "Puma RS-X",
    price: 9000,
  },
  {
    image: hero4,
    name: "Reebok Classic",
    price: 8500,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    if (showPayment) return; // 🛑 Don't slide if form is open

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [showPayment]);

  const current = slides[currentIndex];

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={current.image}
        alt={current.name}
        className="absolute top-0 left-0 w-full h-full object-cover animate-zoomInOut"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text and Button */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">{current.name}</h1>
        <p className="text-3xl mb-6">Rs. {current.price.toLocaleString()}</p>

        <button
          onClick={() => setShowPayment(!showPayment)}
          className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg text-xl font-semibold shadow-md"
        >
          Buy Now
        </button>

        {/* Payment Form */}
        {showPayment && (
          <div className="mt-8 bg-white text-black p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-2 border rounded"
              />
              <input
                type="text"
                placeholder="Shipping Address"
                className="w-full px-4 py-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Pay Rs. {current.price.toLocaleString()}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
