import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import shoesData from "../Data/Data";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const shoe = shoesData.find((s) => s.id === Number(productId));
  const [cartCount, setCartCount] = useState(0);

  if (!shoe) {
    return (
      <div className="text-center text-red-600 p-8">
        Product not found
      </div>
    );
  }

  
  const discountedPrice = Math.round(shoe.price * (1 - shoe.discount / 100));

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product: shoe, discountedPrice } });
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    alert(`Added to cart! You have ${cartCount + 1} item(s) in your cart.`);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      {/* Left: Shoe Image and Name */}
      <div className="flex flex-col items-center">
        <img src={shoe.image} alt={shoe.name} className="w-full h-auto max-w-sm" />
        <h2 className="text-2xl font-bold mt-4">{shoe.name}</h2>
      </div>

      {/* Right: Details and Actions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-600 text-lg">Brand: {shoe.name.split(" ")[0]}</p>
        <p className="text-xl font-semibold mt-4">
          Original Price: <span className="line-through text-red-500">{shoe.price} Nrs</span>
        </p>
        <p className="text-lg mt-1">Discount: {shoe.discount}%</p>
        <p className="text-2xl font-bold text-green-600 mt-2">
          Price Now: {discountedPrice} Nrs
        </p>

        <div className="mt-6 space-y-4">
          <button
            onClick={handleAddToCart}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
