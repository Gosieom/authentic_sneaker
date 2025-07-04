import React, { useEffect, useState } from "react";
import Offers from "../Offers"; // Path is correct if both are in same folder

const Home = () => {
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowOffer(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="min-h-[120vh] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Authentic Sneaker</h1>
        <p className="text-lg text-gray-600">Scroll down to reveal offers</p>
      </div>

      {/* Slide-up Offer Section */}
      <div className={`transition-all duration-700 ease-out transform ${
        showOffer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}>
        <Offers />
      </div>
    </div>
  );
};

export default Home;
