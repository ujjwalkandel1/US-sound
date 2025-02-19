import React from "react";
import Logo from "../assets/image1.png"; 

const Div = () => {
  return (
    <div className="absolute top-[5730px] left-[340x] w-[1340px] h-[466px] bg-black flex items-center justify-center rounded-lg shadow-lg">
      <img src={Logo} alt="Logo" className="w-[200px] h-auto object-contain" />
    </div>
  );
};

export default Div
