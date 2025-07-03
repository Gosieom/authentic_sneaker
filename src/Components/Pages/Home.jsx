import React from "react";
import Hero from "../Hero";
import { Link } from "react-router-dom";
import Offers from "./Offers";

const Home = () => {
  return (
    <div>
      <Hero />
      <Offers />
      <BestSellers />
      <Contact />
      <Feedback />
      <div className="text-center py-6">
        <Link to="/admin" className="text-blue-600 underline font-semibold">
          Go to Admin Panel
        </Link>
      </div>
    </div>
  );
};

export default Home;
