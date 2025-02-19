import React from "react";
import leftImage from "../assets/1.jpeg";
import rightImage from "../assets/3.jpeg";
import centerImage from "../assets/2.jpeg";

const ImageOverlay = () => {
  return (
    <div className="relative w-[1200px] h-[659px] mt-10 ">
      {/* Left Image */}
      <img
        src={leftImage}
        alt="Left"
        className="absolute w-[488px] h-[659px] top-0 left-[10px] object-cover"
      />

      {/* Right Image */}
      <img
        src={rightImage}
        alt="Right"
        className="absolute w-[488px] h-[659px] top-0 left-[850px] object-cover"
      />

      {/* Center Image */}
      <img
        src={centerImage}
        alt="Center"
        className="absolute w-[488px] h-[659px] top-[50px] left-[445px] object-cover z-10 shadow-lg rotate-90"
      />
    </div>
  );
};

export default ImageOverlay;
