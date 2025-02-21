import React from "react";
import { logo1, logo11, logo2, logo3, logo4, logo5, logo6 } from "../../scripts/Image";

const products = [
  {
    id: 1,
    name: "LED SCREEN P1",
    image: logo1,
    oldPrice: "Rs 800",
    newPrice: "Rs 1200",
  },
  {
    id: 2,
    name: "LED SCREEN P3",
    image: logo2,
    oldPrice: "Rs 800",
    newPrice: "Rs 1200",
  },
  {
    id: 3,
    name: "Moving Head Light",
    image: logo3,
    oldPrice: "Rs 800",
    newPrice: "Rs 1200",
  },
  {
    id: 4,
    name: "LED SCREEN P1",
    image: logo4,
    oldPrice: "Rs 800",
    newPrice: "Rs 1200",
  },
  {
    id: 5,
    name: "LED SCREEN P3",
    image: logo5,
    oldPrice: "Rs 800",
    newPrice: "Rs 1200",
  },
  {
    id: 6,
    name: "Moving Head Light",
    image: logo6,
    oldPrice: "Rs 800",
    newPrice: "Rs 1200",
  },
  {
    id: 7,
    name: "Moving Head Light",
    image: logo11,
    oldPrice: "Rs 800",
    newPrice: "Rs 1200",
  },
];

const TendingProducts = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 mb-20 px-2 sm:px-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full bg-white shadow-lg p-2 sm:p-4 text-center rounded-lg hover:shadow-xl transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[100px] sm:h-[160px] md:h-[220px] lg:h-[260px] object-cover rounded-md mx-auto"
          />
          <h3 className="font-semibold mt-2 text-xs sm:text-sm md:text-lg">{product.name}</h3>
          <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm line-through">{product.oldPrice}</p>
          <p className="font-bold text-sm sm:text-lg md:text-xl text-black">{product.newPrice}</p>
          <button className="mt-2 sm:mt-3 px-2 sm:px-4 py-1 sm:py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition">
            RENT NOW
          </button>
        </div>
      ))}
    </section>
  );
};

export default TendingProducts;
