import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import shoesData from "../Data/shoesData";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = shoesData.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-red-500 mt-20 text-2xl">Product not found!</div>;
  }

  const handleBuyNow = () => {
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col md:flex-row p-10 bg-white rounded-xl shadow-xl max-w-6xl mx-auto mt-10">
      <div className="md:w-1/2 flex justify-center items-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md rounded-2xl shadow-lg border border-gray-200"
        />
      </div>

      <div className="md:w-1/2 space-y-6 p-6">
        <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
        <p className="text-sm uppercase text-gray-500 tracking-wide">Category: {product.category}</p>

        <p className="text-gray-700 text-lg">
          <strong>Description:</strong> Stylish and comfortable premium quality running sneakers, perfect for everyday use and sports activities.
        </p>

        <div className="text-2xl font-bold text-gray-900">
          <span className="line-through text-red-400 mr-3">Rs. {product.price}</span>
          <span className="text-green-600">Rs. {product.discount}</span>
        </div>

        <div className="flex gap-4 pt-4">
          <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md transition-all duration-200">
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-6 py-3 rounded-full shadow-md transition-all duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
