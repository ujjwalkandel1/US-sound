import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 w-[1478px]">
      <div className="container mx-auto px-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          
          
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold">LOGO</h2>
            <p className="mt-2 text-sm text-gray-400">
              US Sound & Lights provides professional audio and lighting
              solutions for events of all sizes.
            </p>
          </div>

          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 text-sm text-gray-400 space-y-2">
              <li><a href="#">Shop</a></li>
              <li><a href="#">Rent Equipment</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold">Contact</h2>
            <ul className="mt-2 text-sm text-gray-400 space-y-2">
              <li> 1234 Sound Ave</li>
              <li>Los Angeles, CA 90028</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@ussoundlights.com</li>
            </ul>
          </div>

          
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <FaFacebookF className="text-xl cursor-pointer hover:text-gray-400" />
              <FaTwitter className="text-xl cursor-pointer hover:text-gray-400" />
              <FaInstagram className="text-xl cursor-pointer hover:text-gray-400" />
              <FaYoutube className="text-xl cursor-pointer hover:text-gray-400" />
            </div>
          </div>

        </div>

        
        <hr className="my-6 border-gray-600" />

        
        <p className="text-center text-gray-400 text-sm">
          © 2023 US Sound & Lights. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
