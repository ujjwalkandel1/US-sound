import React from 'react'

const About = () => {
  return (
    
    <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-8 py-10">
      {/* Text Section */}
      <div className="md:w-[527px] h-[297px] text-left pl-128px pt-470px">
        <p className="font-inter font-medium text-lg leading-7 tracking-normal text-gray-800">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="md:w-[590px] h-[367px] bg-gray-300 w-full  md:h-96 ]"></div>
    </div>
  );
};

export default About