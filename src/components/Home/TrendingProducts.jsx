import React from "react";
import { logo1, logo11, logo2, logo3, logo4, logo5, logo6 } from "../../scripts/Image";

const  products = [
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
    <section className="w-[1201px] mx-auto grid grid-cols-3 gap-[16px] mt-[5px] mb-[20px]">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[286px] h-[519px] bg-white shadow-md p-[20px] text-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[250px] object-cover"
          />
          <h3 className="font-semibold mt-3">{product.name}</h3>
          <p className="text-gray-500 line-through">{product.oldPrice}</p>
          <p className="font-bold text-lg">{product.newPrice}</p>
          <button className="mt-4 px-4 py-2 bg-black text-white font-semibold">
            RENT NOW
          </button>
        </div>
      ))}
    </section>
  );
};

export default TendingProducts;
