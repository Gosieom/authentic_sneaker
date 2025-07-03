import React from "react";
import shoe5 from "./assets/shoe5.png";
import shoe12 from "./assets/shoe12.png";

const Offers = () => {
  const offerShoes = [
    {
      id: 1,
      name: "Nike Air Max",
      image: shoe5,
      originalPrice: 15000,
      discountPrice: 9999,
    },
    {
      id: 2,
      name: "Adidas UltraBoost",
      image: shoe12,
      originalPrice: 13000,
      discountPrice: 8499,
    },
  ];

  return (
    <div className="py-10 bg-gray-100 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">🔥 Hot Offers</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offerShoes.map((shoe) => (
          <div key={shoe.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={shoe.image} alt={shoe.name} className="h-48 mx-auto" />
            <h3 className="text-xl font-semibold text-center mt-4">{shoe.name}</h3>
            <p className="text-center line-through text-gray-500">Rs. {shoe.originalPrice}</p>
            <p className="text-green-600 text-center font-bold">Rs. {shoe.discountPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
