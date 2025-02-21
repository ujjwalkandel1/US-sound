import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#EFF2FC] shadow-md w-full">
      {/* Main header container */}
      <div className="max-w-[1333px] mx-auto px-4 h-[79px] flex justify-between items-center">
        {/* Left Navigation Links (Desktop only) */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          <a href="/" className="text-gray-700 hover:text-blue-500">
            HOME
          </a>
          <a href="/shop" className="text-gray-700 hover:text-blue-500">
            SHOP
          </a>
          <a href="/rental" className="text-gray-700 hover:text-blue-500">
            RENTAL
          </a>
        </div>

        {/* Logo */}
        <div className="text-lg font-bold">LOGO</div>

        {/* Right Navigation Links (Desktop only) */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          <a href="/services" className="text-gray-700 hover:text-blue-500">
            SERVICES
          </a>
          <a href="/aboutus" className="text-gray-700 hover:text-blue-500">
            ABOUT US
          </a>
          <a href="/contactus" className="text-gray-700 hover:text-blue-500">
            CONTACT US
          </a>
          <button className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            📞
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            {isMobileMenuOpen ? (
              // Close icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger menu icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#EFF2FC] shadow-md">
          <div className="flex flex-col space-y-4 py-4 text-sm font-semibold text-center">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              HOME
            </a>
            <a href="/shop" className="text-gray-700 hover:text-blue-500">
              SHOP
            </a>
            <a href="/rental" className="text-gray-700 hover:text-blue-500">
              RENTAL
            </a>
            <a href="/services" className="text-gray-700 hover:text-blue-500">
              SERVICES
            </a>
            <a href="/aboutus" className="text-gray-700 hover:text-blue-500">
              ABOUT US
            </a>
            <a href="/contactus" className="text-gray-700 hover:text-blue-500">
              CONTACT US
            </a>
            <button className="mx-auto p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              📞
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
