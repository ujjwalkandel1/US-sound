import React from "react";
import { Image22 } from "../../scripts/Image";

const HeroSection = ({ title, subtitle }) => {
  return (
    <div
      className="relative w-full max-w-[1333px] h-[298px] flex items-center justify-center bg-cover bg-center mb-[20px] mx-auto px-4"
      style={{
        backgroundImage: `url(${Image22})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="relative text-center text-white z-10 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
        <p className="text-xs sm:text-sm mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroSection;
