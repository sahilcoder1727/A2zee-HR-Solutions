import React from 'react';
import img from "../assets/imgs/aboutimg.png";

function Value() {
  return (
    <div className='bg-[#F26248] lg:mt-10'>
      <div className='flex justify-center'>
        <img
          src={img}
          alt="Customized Solutions"
          className="w-full lg:max-w-6xl h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Value;
