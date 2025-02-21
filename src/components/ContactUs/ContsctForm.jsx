import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex flex-wrap gap-6 p-6 max-w-screen-xl mx-auto">
      
      <div className="w-full md:w-[301px] h-auto md:h-[677px] flex flex-col gap-5">
        
        <div className="bg-black text-white p-6 rounded-lg flex flex-col items-center text-center">
          <span className="text-2xl">📍</span>
          <h3 className="text-lg font-semibold">Address</h3>
          <p>Bharatpur 1 - Chitwan, Nepal</p>
        </div>
        
        <div className="bg-black text-white p-6 rounded-lg flex flex-col items-center text-center">
          <span className="text-2xl">📞</span>
          <h3 className="text-lg font-semibold">Phone</h3>
          <p>+977 9858766666</p>
        </div>
        
        <div className="bg-black text-white p-6 rounded-lg flex flex-col items-center text-center">
          <span className="text-2xl">📧</span>
          <h3 className="text-lg font-semibold">G-Mail</h3>
          <p>drone@gmail.com</p>
        </div>
        
        <div className="rounded-lg overflow-hidden">
          <iframe
            className="w-full h-40 rounded-lg"
            src="https://www.google.com/maps/embed?..." 
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      
      <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
        <form className="space-y-4">
          <div className="grid w-[385px] grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-gray-700">Name *</label>
              <input type="text" className="w-full border p-2 rounded-md" placeholder="Enter your Name" />
            </div>
            <div>
              <label className="font-semibold text-gray-700">Email *</label>
              <input type="email" className="w-full border p-2 rounded-md" placeholder="Enter your Email" />
            </div>
          </div>

          <div>
            <label className="font-semibold text-gray-700">Mobile *</label>
            <input type="text" className="w-full border p-2 rounded-md" placeholder="Enter your Mobile Number" />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Subject *</label>
            <input type="text" className="w-full border p-2 rounded-md" placeholder="Enter the Subject" />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Message *</label>
            <textarea className="w-full border p-2 rounded-md h-32" placeholder="Enter your Message"></textarea>
          </div>

          <button className="w-[180px] h-[42px] md:max-w-sm mx-auto block bg-black text-white py-2 rounded-md hover:bg-gray-800">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
