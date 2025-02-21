import React, { useState } from "react";

const ProductFilter = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const categories = ["ALL", "LIGHTS", "SOUNDS", "STAGE", "OTHERS"];

  return (
    <section className="text-center py-10 px-4">
      <p className="text-sm text-gray-500">New Trending</p>
      <h2 className="text-2xl font-bold">PRODUCTS</h2>

      {/* On mobile, items are stacked vertically; on md screens, they appear in a row */}
      <div className="mt-4 flex flex-col md:flex-row md:justify-center md:items-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`w-full md:w-[203px] h-[60px] text-center rounded-md ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600 hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductFilter;
