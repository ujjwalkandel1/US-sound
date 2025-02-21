import React from "react";
import { PaintBucket, Star, ScanSearch } from "lucide-react";
import { logo111 } from "../../scripts/Image";

const features = [
  {
    icon: <PaintBucket className="w-8 h-8 text-green-500" />,
    title: "SMART AND RADIANT COLORS",
    description: "The specific instructions for installing a wall sconce will differ depending on the type of fixture you choose.",
  },
  {
    icon: <Star className="w-8 h-8 text-green-500" />,
    title: "FEEL THE SHINE OF A STAR",
    description: "The specific instructions for installing a wall sconce will differ depending on the type of fixture you choose.",
  },
  {
    icon: <ScanSearch className="w-8 h-8 text-green-500" />,
    title: "IMPROVE YOUR INTERIOR DESIGN",
    description: "The specific instructions for installing a wall sconce will differ depending on the type of fixture you choose.",
  },
];

const FeatureSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl mx-auto p-6 gap-10">
      
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

    
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
        <img
          src={logo111}
          alt="Feature"
          className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
