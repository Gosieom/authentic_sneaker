import React from "react";
import offerShoe from "../Assets/shoe1.png"; // Replace with your actual Nike shoe image path

const Offers = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black py-16 px-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Shoe Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={offerShoe}
            alt="Nike Offer"
            className="w-72 h-auto animate-pulse drop-shadow-xl"
          />
        </div>

        {/* Offer Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            Grab <span className="text-yellow-400">10% OFF</span> on all{" "}
            <span className="text-red-500">Nike</span> Products!
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Don’t miss out on our limited-time offer. Top quality. Maximum comfort.
            Stylish designs. Everything you need — now with 10% discount!
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
