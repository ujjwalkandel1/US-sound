import React from "react";
import leftImage from "../../assets/1.jpeg";
import rightImage from "../../assets/3.jpeg";
import centerImage from "../../assets/2.jpeg";

const ImageOverlay = () => {
  return (
    <div className="relative w-full max-w-[1333px] h-auto mt-10 mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
      {/* Left Image */}
      <img
        src={leftImage}
        alt="Left"
        className="w-full md:w-[488px] h-auto md:h-[659px] object-cover"
      />

      {/* Center Image */}
      <img
        src={centerImage}
        alt="Center"
        className="w-full md:w-[488px] h-auto md:h-[659px] object-cover z-10 shadow-lg rotate-90"
      />

      {/* Right Image */}
      <img
        src={rightImage}
        alt="Right"
        className="w-full md:w-[488px] h-auto md:h-[659px] object-cover"
      />
    </div>
  );
};

export default ImageOverlay;
