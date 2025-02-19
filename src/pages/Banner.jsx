import React from 'react';

const OfferSection = () => {
  return (
    <section className="w-full h-[717px] flex">
      {/* Left Side (Two Boxes) */}
      <div className="w-1/4 flex flex-col">
        {/* Top Left - Discount Offer */}
        <div
          className="h-1/2 flex items-center justify-center text-white text-2xl font-bold"
          style={{ backgroundImage: "url('C:\Users\NITRO\OneDrive\Desktop\hello\hello\src\assets\image11.png')", backgroundSize: 'cover' }}
        >
          <div className="p-6 text-center">
            <p>Flat</p>
            <p className="text-4xl">15% Off</p>
          </div>
        </div>
        {/* Bottom Left - Product Image */}
        <div className="h-1/2 flex items-center justify-center bg-white p-4">
          <img src="/images/mic.jpg" alt="Mic & Headphones" className="max-h-full" />
        </div>
      </div>

      {/* Center - Main Product Display */}
      <div className="w-1/2 flex items-center justify-center bg-white p-6">
        <img src="/images/main-product.jpg" alt="Main Product" className="max-h-full" />
      </div>

      {/* Right Side - Offer Details */}
      <div
        className="w-1/4 flex flex-col justify-center p-8 text-white"
        style={{ backgroundImage: "url('/images/right-bg.jpg')", backgroundSize: 'cover' }}
      >
        <h2 className="text-3xl font-bold">ALL TYPES OF LIGHTS</h2>
        <p className="text-sm mt-2">AND SOUND SYSTEM</p>
        <p className="mt-4 text-sm">
          It is a long established fact that a reader will be distracted by the readable content.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-md">SHOP NOW</button>
      </div>
    </section>
  );
};

export default OfferSection;
