import React from "react";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";
import six from "./assets/6.png";

const bestSellingShoes = [
  { id: 1, name: "Air Jordan 1", price: 12000, image: one },
  { id: 2, name: "Nike Dunk", price: 11000, image: two },
  { id: 3, name: "Adidas NMD", price: 10000, image: three },
  { id: 4, name: "Puma RS-X", price: 9500, image: four },
  { id: 5, name: "Reebok Classic", price: 9000, image: five },
  { id: 6, name: "New Balance 550", price: 10500, image: six },
];

const BestSellers = () => {
  return (
    <div className="py-10 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">💯 Best Sellers</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bestSellingShoes.map((shoe) => (
          <div key={shoe.id} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition">
            <img src={shoe.image} alt={shoe.name} className="h-48 mx-auto mb-4 object-contain" />
            <h3 className="text-xl font-semibold text-center">{shoe.name}</h3>
            <p className="text-center text-blue-600 font-bold">Rs. {shoe.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
