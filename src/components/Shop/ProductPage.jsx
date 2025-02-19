import React, { useState } from "react";
import { logo, logo1, logo10, logo11, logo3 } from "../../scripts/Image";

// Sidebar
const categories = [
  "Led Screen",
  "Moving Head Light",
  "Mic",
  "Speaker",
  "Thrust",
  "Tiger Touch Light",
  "Stage",
  "Extra Category 1",
  "Extra Category 2",
];

const FilterSidebar = ({ selectedCategories, toggleCategory }) => {
  return (
    <div className="p-4 bg-white shadow-md w-[346px] mx-auto">
      {categories.map((category) => (
        <label
          key={category}
          className="flex justify-between items-center border rounded-md px-[21px] py-[23px] mb-[10px] cursor-pointer hover:bg-gray-100"
          style={{ height: "69px" }}
        >
          <span className="text-gray-700">{category}</span>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => toggleCategory(category)}
            className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
          />
        </label>
      ))}
    </div>
  );
};

// Product 
const products = [
  { id: 1, name: "LED SCREEN P3", price: 1200, oldPrice: 800, image:logo10 },
  { id: 2, name: "Moving Head Light", price: 1200, oldPrice: 800, image: logo3 },
  { id: 3, name: "LED SCREEN P1", price: 1200, oldPrice: 800, image: logo11},
  { id: 4, name: "Mic", price: 1200, oldPrice: 800, image: logo},
  { id: 5, name: "LED SCREEN P3", price: 1200, oldPrice: 800, image: logo1},
  { id: 6, name: "Moving Head Light", price: 1200, oldPrice: 800, image:logo3},
  { id: 7, name: "LED SCREEN P3", price: 1200, oldPrice: 800, image:logo10 },
  { id: 8, name: "LED SCREEN P1", price: 1200, oldPrice: 800, image: logo11},
  { id: 6, name: "Moving Head Light", price: 1200, oldPrice: 800, image:logo3},
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-[19px] w-[896px] mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[286px] h-[507px] p-[20px_10px] border shadow-md flex flex-col items-center gap-8"
        >
          <img src={product.image} alt={product.name} className="w-[266px] h-[] object-cover" />
          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          <div className="flex items-start gap-5"> 
          <p className="text-gray-500 line-through">Rs {product.oldPrice}</p>
          <p className="text-xl font-bold">Rs {product.price}</p>
          </div>
          <button className="  text-black font-bold underline ">ORDER NOW</button>
        </div>
      ))}
    </div>
  );
};

// Main Component
const ProductPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="mr-4">
        <FilterSidebar selectedCategories={selectedCategories} toggleCategory={toggleCategory} />
      </div>
      <div className="flex justify-center w-full">
        <ProductGrid />
      </div>
    </div>
  );
};

export default ProductPage;
