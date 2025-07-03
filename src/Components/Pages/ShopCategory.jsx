import React from "react";
import { useNavigate } from "react-router-dom";

const ShopCategory = ({ shoes }) => {
  const navigate = useNavigate();

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {shoes.map((shoe) => {
        const discountedPrice = shoe.price - shoe.discount;
        return (
          <div
            key={shoe.id}
            onClick={() => goToProduct(shoe.id)}
            className="cursor-pointer border rounded shadow p-4 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">{shoe.name}</h3>
            <p className="line-through text-red-600">{shoe.price} Nrs</p>
            <p className="text-xl font-bold">{discountedPrice} Nrs</p>
          </div>
        );
      })}
    </div>
  );
};

export default ShopCategory;
