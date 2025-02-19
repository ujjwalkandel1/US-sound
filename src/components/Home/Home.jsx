import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-[1333px] h-[720px] mx-auto flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/image.png')" }} 
    >
     
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

      
      <div className="relative z-10 text-white">
        <p className="text-xs uppercase tracking-wide">
          Don't Miss Today's Featured Deals
        </p>
        <h1 className="text-[36px] md:text-[26px] font-extrabold mt-2">
          DECORATIVE LIGHTNINGS & SOUNDS
        </h1>
        <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-md">
          SHOP NOW
        </button>

        {/* Carousel Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
