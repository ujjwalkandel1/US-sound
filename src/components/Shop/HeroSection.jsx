import React from "react";
import { Image22 } from "../../scripts/Image";

const HeroSection = () => {
  return (
    <div
      className="relative w-[1478px] h-[298px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:`url(${Image22})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="relative text-center text-white z-10">
        <h1 className="text-3xl font-bold">SHOP</h1>
        <p className="text-sm mt-1">HOME &gt; SHOP</p>
      </div>
    </div>
  );
};

export default HeroSection;
