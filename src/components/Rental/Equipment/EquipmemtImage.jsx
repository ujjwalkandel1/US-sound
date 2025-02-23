import React from "react";
import { logo12 } from "../../../scripts/Image";

const images = [logo12, logo12, logo12];

const EquipmentRental = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 px-4 md:px-8 lg:px-20">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="group relative w-[90%] sm:w-[300px] md:w-[350px] lg:w-[380px] h-[320px] overflow-hidden rounded-lg"
        >
          <img
            src={image}
            alt="LED Screen P3"
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full rounded-b-lg transition-opacity duration-300 group-hover:bg-opacity-80">
            <h3 className="font-bold text-lg">LED SCREEN P3</h3>
            <p className="text-sm">
              <span className="line-through">Rs 800</span> <span className="font-semibold">Rs 1200</span>
            </p>
            <p className="text-xs">High-power LED moving head with beam effects</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EquipmentRental;
