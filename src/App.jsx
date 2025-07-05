import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Pages/Cart";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Product from "./Components/Pages/Product";
import Shop from "./Components/Pages/Shop";
import Checkout from "./Components/Pages/Checkout";
import Men from "./Components/Pages/Men";
import Women from "./Components/Pages/Women";
import Kids from "./Components/Pages/Kids";
import Hero from "./Components/Hero";
import Home from "./Components/Pages/Home";

import "./index.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home />
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/men" element={<Men />} />
        <Route path="/category/women" element={<Women />} />
        <Route path="/category/kids" element={<Kids />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;