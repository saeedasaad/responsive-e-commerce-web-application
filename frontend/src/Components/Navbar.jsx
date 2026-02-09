import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function AppNavbar({ cartCount = 0 }) {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          <Link to="/">
            <img src={assets.logo} alt="Logo" className="h-6 w-auto" />
          </Link>

          <div className="hidden md:flex gap-8">
            <Link to="/" className="hover:text-gray-700">Home</Link>
            <Link to="/products" className="hover:text-gray-700">Products</Link>
            <Link to="/about" className="hover:text-gray-700">About</Link>
            <Link to="/contact" className="hover:text-gray-700">Contact</Link>
          </div>

          <div className="flex-1 max-w-xl relative hidden sm:block">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border rounded-full focus:ring-1 focus:ring-black"
            />
            <img src={assets.searchIcon} alt="Search" className="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2" />
          </div>

          <div className="flex gap-4">
            <Link to="/cart" className="relative">
              <img src={assets.cartIcon} alt="Cart" className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/login">
              <img src={assets.userIcon} alt="User" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;