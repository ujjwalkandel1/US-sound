import React from "react";

const collections = [
  {
    title: "NEW COLLECTIONS",
    subtitle: "FASHION",
    image: "/./src/assets/image3.png", 
  },
  {
    title: "LIGHT COLLECTION",
    subtitle: "BEST FOR YOU",
    image: "/./src/assets/image1.png", 
  },
  {
    title: "SOUND COLLECTION",
    subtitle: "BEST FOR YOU",
    image: "/./src/assets/image2.png", 
  },
];

const CollectionSection = () => {
  return (
    <div className="w-[1197px] mx-auto flex justify-between gap-[19px] mt-[40px]">
      {collections.map((item, index) => (
        <div
          key={index}
          className="w-[346px] h-[220px] bg-[#EFFFFA] rounded-lg flex flex-col justify-between p-5"
        >
          {/* Text Section */}
          <div>
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.subtitle}</p>
          </div>

          {/* Image */}
          <div className="flex justify-between items-end">
            <button className="text-xs font-bold border-b-2 border-black pb-1">
              SHOP NOW
            </button>
            <img src={item.image} alt={item.title} className="w-[80px] h-[80px]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionSection;
