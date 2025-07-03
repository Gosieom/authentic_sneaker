import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/Cart_icon.png";

const Navbar = ({ cartCount = 0 }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full shadow-md">
      {/* Top Row: Logo, Search, Login/Cart */}
      <div className="flex items-center justify-between px-6 py-3 bg-white flex-nowrap">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
          <img src={logo} alt="Logo" className="h-14" />
          <span className="text-xl font-bold text-gray-800 whitespace-nowrap">Authentic Sneaker</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-6 min-w-0">
          <div className="flex bg-gray-100 rounded-full shadow-inner overflow-hidden">
            <input
              type="text"
              placeholder="Search sneakers..."
              className="flex-grow px-4 py-2 bg-transparent focus:outline-none text-sm truncate"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-full whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* Login and Cart */}
        <div className="flex items-center space-x-6 flex-shrink-0">
          <Link
            to="/login"
            className={`text-sm font-medium ${
              isActive('/login') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Login
          </Link>

          <Link to="/cart" className="relative">
            <img src={cartIcon} alt="Cart" className="h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Bottom Row: Navigation Links */}
      <nav className="bg-gray-50 border-t border-gray-200">
        <ul className="flex justify-center space-x-10 py-3 text-sm font-medium text-gray-700 m-0">
          <li>
            <Link to="/" className={isActive('/') ? 'text-blue-600' : 'hover:text-blue-500'}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/category/men" className={isActive('/category/men') ? 'text-blue-600' : 'hover:text-blue-500'}>
              Men
            </Link>
          </li>
          <li>
            <Link to="/category/women" className={isActive('/category/women') ? 'text-blue-600' : 'hover:text-blue-500'}>
              Women
            </Link>
          </li>
          <li>
            <Link to="/category/kids" className={isActive('/category/kids') ? 'text-blue-600' : 'hover:text-blue-500'}>
              Kids
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
