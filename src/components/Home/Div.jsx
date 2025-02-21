import React from "react";
import Logo from "../../assets/image1.png"; 

const Div = () => {
  return (
    <div className="w-full max-w-[1340px] h-auto min-h-[300px] bg-black flex items-center justify-center rounded-lg shadow-lg mb-[30px] mx-auto px-4 py-8">
      <img src={Logo} alt="Logo" className="w-[150px] sm:w-[200px] h-auto object-contain" />
    </div>
  );
};

export default Div;
