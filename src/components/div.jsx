import React from "react";
import pcLogo from "../assets/pc-logo.png"; // Replace with your logo path

const CenteredLogDiv = () => {
  return (
    <div className="absolute top-[5492px] left-[120px] w-[1200px] h-[466px] bg-gray-200 flex items-center justify-center rounded-lg shadow-lg">
      <img src={pcLogo} alt="PC Logo" className="w-[200px] h-auto object-contain" />
    </div>
  );
};

export default Div;
