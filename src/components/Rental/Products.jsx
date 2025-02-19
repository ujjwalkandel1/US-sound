import React, { useState } from "react";

const ProductFilter = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "LIGHTS", "SOUNDS", "STAGE", "OTHERS"];

  return (
    <section className="text-center py-20">
      
      <p className="text-sm text-gray-500">New Trending</p>
      <h2 className="text-2xl font-bold">PRODUCTS</h2>

      
      <div className="flex justify-center items-center mt-4 space-x-4 text-gray-600 font-semibold">
        {categories.map((category, index) => (
          <React.Fragment key={category}>
           
            <button
              onClick={() => setActiveCategory(category)}
              className={`w-[203px] h-[60px] px-[63px] py-[19px] text-center ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "hover:text-black bg-gray-100"
              }`}
            >
              {category}
            </button>

            
            {index < categories.length - 1 && (
              <span className="text-gray-400">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProductFilter;
