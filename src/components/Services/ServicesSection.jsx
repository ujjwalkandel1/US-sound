import React from "react";
import { Search, Star, DollarSign, Users, Plus, Shuffle } from "lucide-react";

const services = [
  { icon: <Search size={32} />, title: "Sales", subtitle: "Sound & Lights" },
  { icon: <Star size={32} />, title: "Rental", subtitle: "Services" },
  { icon: <DollarSign size={32} />, title: "Affordable", subtitle: "Cost" },
  { icon: <Users size={32} />, title: "High", subtitle: "Efficiency" },
  { icon: <Plus size={32} />, title: "Best", subtitle: "Sound Quality" },
  { icon: <Shuffle size={32} />, title: "Random", subtitle: "Effects" },
];

const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center py-12 px-4">
      
      <h4 className="text-lg font-semibold text-gray-500 text-center">
        Meet Our Services
      </h4>
      <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-center">
        What We Specialize In
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl w-full px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
          >
            
            <div className="w-14 h-14 flex items-center justify-center bg-black text-white rounded-full mb-4">
              {service.icon}
            </div>

            
            <h3 className="text-lg font-bold">
              {service.title}
              <br />
              <span className="font-medium text-gray-600">{service.subtitle}</span>
            </h3>
            <p className="text-gray-500 mt-2">
              Providing top-notch sound and lighting solutions tailored for your needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
