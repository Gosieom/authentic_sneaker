import React from "react";
import pic1 from "./Assets/pic1.png";
import pic2 from "./Assets/pic2.png";
import pic3 from "./Assets/pic3.png";

const Offers = () => {
  return (
    <section className="flex flex-col items-center bg-gradient-to-r from-yellow-100 to-pink-100 py-10 px-4 space-y-10 shadow-md rounded-md mx-4 my-6">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-red-600 animate-bounce text-center">
        🤑 Grab 10% OFF – Hurry Up!
      </h2>

      {/* Images */}
      <div className="flex flex-wrap justify-center gap-8">
        <img src={pic1} alt="Offer 1" className="w-40 h-40 object-contain hover:scale-105 transition-transform duration-300" />
        <img src={pic2} alt="Offer 2" className="w-40 h-40 object-contain hover:scale-105 transition-transform duration-300" />
        <img src={pic3} alt="Offer 3" className="w-40 h-40 object-contain hover:scale-105 transition-transform duration-300" />
      </div>

      {/* CTA Button */}
      <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg text-lg">
        Shop Now
      </button>
    </section>
  );
};

export default Offers;
