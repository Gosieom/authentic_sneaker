import React from "react";
import { Link } from "react-router-dom";
import shoesData from "../Data/Data";

const Men = () => {
  const menShoes = shoesData.filter((shoe) => shoe.category === "men");

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Men's Shoes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {menShoes.map((shoe) => (
          <Link
            to={`/product/${shoe.id}`}
            key={shoe.id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-center">{shoe.name}</h2>
            <p className="mt-2 text-gray-700 font-medium">
              Price: <span className="text-green-600">{shoe.price} Nrs</span>
            </p>
            <p className="text-sm text-red-500 mt-1">Discount: {shoe.discount}%</p>
            <p className="mt-1 text-gray-600">
              Available Sizes: {shoe.sizes ? shoe.sizes.join(", ") : "N/A"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Men;
