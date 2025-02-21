import React, { useState } from "react";
import { logo, logo1, logo10, logo11, logo3 } from "../../scripts/Image";


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
    <div className="p-4 bg-white shadow-md w-full md:w-[300px] rounded-lg">
      {categories.map((category) => (
        <label
          key={category}
          className="flex justify-between items-center border rounded-md px-5 py-4 mb-3 cursor-pointer hover:bg-gray-100"
        >
          <span className="text-gray-700 text-sm md:text-base">{category}</span>
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


const products = [
  { id: 1, name: "LED SCREEN P3", price: 1200, oldPrice: 800, image: logo10 },
  { id: 2, name: "Moving Head Light", price: 1200, oldPrice: 800, image: logo3 },
  { id: 3, name: "LED SCREEN P1", price: 1200, oldPrice: 800, image: logo11 },
  { id: 4, name: "Mic", price: 1200, oldPrice: 800, image: logo },
  { id: 5, name: "LED SCREEN P3", price: 1200, oldPrice: 800, image: logo1 },
  { id: 6, name: "Moving Head Light", price: 1200, oldPrice: 800, image: logo3 },
  { id: 7, name: "LED SCREEN P3", price: 1200, oldPrice: 800, image: logo10 },
  { id: 8, name: "LED SCREEN P1", price: 1200, oldPrice: 800, image: logo11 },
  { id: 9, name: "Moving Head Light", price: 1200, oldPrice: 800, image: logo3 },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full md:w-[290px] h-auto p-4 border shadow-md flex flex-col items-center gap-4 rounded-lg bg-white"
        >
          <img src={product.image} alt={product.name} className="w-[260px] h-[260px] object-cover rounded-md" />
          <h3 className="text-lg font-semibold text-center">{product.name}</h3>
          <div className="flex flex-col items-center gap-1">
            <p className="text-gray-500 line-through">Rs {product.oldPrice}</p>
            <p className="text-xl font-bold text-green-600">Rs {product.price}</p>
          </div>
          <button className="text-white bg-black px-4 py-2 rounded-md font-bold hover:bg-gray-800 transition duration-300">ORDER NOW</button>
        </div>
      ))}
    </div>
  );
};


const ProductPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <div className="flex flex-col md:flex-row p-4 mx-auto max-w-[1333px]">
      
      <div className="mb-6 md:mr-6 w-full md:w-auto">
        <FilterSidebar selectedCategories={selectedCategories} toggleCategory={toggleCategory} />
      </div>

     
      <div className="flex justify-center w-full">
        <ProductGrid />
      </div>
    </div>
  );
};

export default ProductPage;
