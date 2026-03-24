import React from "react";

const Nav = () => {
  return (
    <div className="bg-purple-500">
      <div className="h-16 items-center flex justify-between">
        {/* LOGO */}
        <div className="text-3xl text-white font-bold px-4">logo</div>

        {/* Desktop links */}
        <div className="hidden sm:block">
          <a href="#" className="text-gray-100 px-4">
            Home
          </a>
          <a href="#" className="text-gray-100 px-4">
            All Categories
          </a>
          <a href="#" className="text-gray-100 px-4">
            Products
          </a>
          <a href="#" className="text-gray-100 px-4">
            About Us
          </a>
          <a href="#" className="text-gray-100 px-4">
            Contact Us
          </a>
        </div>

        {/* Mobile links */}
        <div className="block sm:hidden bg-gray-100">
          <a href="#" className="text-gray-600 px-4 block">
            Home
          </a>
          <a href="#" className="text-gray-600 px-4 block">
            All Categories
          </a>
          <a href="#" className="text-gray-600 px-4 block">
            Products
          </a>
          <a href="#" className="text-gray-600 px-4 block">
            About Us
          </a>
          <a href="#" className="text-gray-600 px-4 block">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
