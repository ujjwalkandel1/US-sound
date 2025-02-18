import React from "react";

const Header = () => {
  return (
    <nav className="bg-[#EFF2FC] shadow-md w-[1478px] h-[79px] flex justify-center items-center">
      <div className="w-[90%] flex justify-between items-center">
        {/* Left Side: Navigation Links */}
        <div className="flex space-x-8 text-sm font-semibold">
          <a href="#" className="text-gray-700 hover:text-blue-500">HOME</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">SHOP</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">RENTAL</a>
        </div>

        {/* Center: Logo */}
        <div className="text-lg font-bold">LOGO</div>

        {/* Right Side: Navigation Links */}
        <div className="flex space-x-8 text-sm font-semibold">
          <a href="#" className="text-gray-700 hover:text-blue-500">SERVICES</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">ABOUT US</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">CONTACT US</a>
          <button className="p-2 bg-black text-white rounded-full">📞</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
