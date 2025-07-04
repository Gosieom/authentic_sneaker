import React from "react";
import pic1 from "../Assets/pic1.png";
import pic2 from "../Assets/pic2.png";
import pic3 from "../Assets/pic.png";

const Offer = () => {
  return (
    <section className="flex flex-col items-center bg-gray-100 py-10 space-y-8">
      {/* Images side by side */}
      <div className="flex space-x-8">
        <img src={pic1} alt="pic1" className="w-32 h-32 object-contain" />
        <img src={pic2} alt="pic2" className="w-32 h-32 object-contain" />
        <img src={pic3} alt="pic3" className="w-32 h-32 object-contain" />
      </div>

      {/* Animated Text */}
      <h2
        className="text-4xl font-extrabold text-red-600 animate-pulse"
        style={{ animationDuration: "2s" }}
      >
        Grave 10% off hurry up!!!!
      </h2>
    </section>
  );
};

export default Offer;
