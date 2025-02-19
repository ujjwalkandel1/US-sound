import React from "react";

const JoinUs = () => {
  return (
    <div className="w-full bg-[#8DA4EF24] py-10 flex justify-center">
      <div className="max-w-screen-lg w-full border border-gray-300 p-8 flex justify-between items-center">
        {/* Text Content */}
        <div className="text-left">
          <h2 className="font-bold text-lg text-gray-900">
            JOIN US : LET'S ADD SOME VIBRANCY.
          </h2>
          <p className="text-gray-700 mt-2 max-w-lg">
            In egestas erat imperdiet sed euismod nisi. Trincidunt augue interdum velit
            euismod in pellentesque massa placerat. Amet nisl purus in mollis nunc sed 
            usce id velit ut.
          </p>
        </div>

        {/* Button */}
        <button className="bg-white text-black font-bold shadow-md w-[203px] h-[68px] px-[53px] py-[24px] flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white">
  RENT NOW
</button>


      </div>
    </div>
  );
};

export default JoinUs;
