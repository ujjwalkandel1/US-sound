import React from "react";

const packages = [
  {
    id: 1,
    title: "CONCERT PACKAGES",
    price: "Rs 26,550/day",
    features: ["Concert Packages", "Moving Head Lights", "LED Video Wall", "Stage Monitoring"],
  },
  {
    id: 2,
    title: "CORPORATE PACKAGE",
    price: "Rs 26,550/day",
    features: ["Concert Packages", "Moving Head Lights", "LED Video Wall", "Stage Monitoring"],
  },
  {
    id: 3,
    title: "WEDDING PACKAGE",
    price: "Rs 26,550/day",
    features: ["Concert Packages", "Moving Head Lights", "LED Video Wall", "Stage Monitoring"],
  },
];

const EventPackages = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-10 text-center">
      <h4 className="text-sm font-medium text-gray-500">Featured</h4>
      <h2 className="text-3xl font-bold mb-8">EVENT PACKAGES</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-gray-100 p-5  rounded-lg shadow-md">
            <div className="w-[367px] h-[251pz] bg-gray-300 mb-5"></div>
            <h3 className="font-bold text-lg">{pkg.title}</h3>
            <ul className="text-sm text-gray-700 my-5 space-y-3">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  ✔ {feature}
                </li>
              ))}
            </ul>
            <p className="font-bold text-lg">{pkg.price}</p>
            <button className="mt-4 bg-black text-white py-2 px-5 rounded hover:bg-gray-800">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPackages;
