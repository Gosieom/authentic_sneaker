import React from "react";
import Hero from "../Hero";
import Offers from "../Offers";
import BestSellers from "../BestSellers";
import Contact from "../Contact";
import Feedback from "../Feedback";
import { Link } from "react-router-dom";

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
