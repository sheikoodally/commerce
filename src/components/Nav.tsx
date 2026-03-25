import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-purple-500 absolute w-full">
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
        <div>
          {/* Mobile menu button */}
          <button
            className="sm:hidden text-gray-100 px-4 focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile links */}
      <div
        className={`"absolute top-16 left-0 w-full bg-gray-100 shadow-lg z-40 space-y-2 pb-2 sm:hidden" ${isOpen ? "block" : "hidden"}`}
      >
        <a href="#" className="text-gray-600 px-4 block pt-2">
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
        <a href="#" className="text-gray-600 px-4 pb-2 block">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Nav;
