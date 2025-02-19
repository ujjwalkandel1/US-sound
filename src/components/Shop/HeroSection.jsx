import React from "react";
import { Image22 } from "../../scripts/Image";

const HeroSection = ({title, subtitle}) => {
  return (
    <div
      className="relative w-[1333px] h-[298px] flex items-center justify-center bg-cover bg-center mb-[20px]"
      style={{
        backgroundImage:`url(${Image22})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="relative text-center text-white z-10">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroSection;
