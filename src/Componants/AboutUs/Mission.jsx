import React from 'react';
import img1 from "../assets/imgs/Mission1.png";
import img2 from "../assets/imgs/Vision.png";

function Mission() {
  return (
    <div className='mt-8 flex flex-wrap justify-center px-2 lg:px-0 gap-y-10 gap-x-28'>
      <div className="bg-white  rounded-xl p-6 border-2 border-black shadow-lg transform transition duration-300 hover:scale-105 max-w-sm md:max-w-md lg:max-w-lg">
        <div className="flex justify-center mb-4">
          <img
            src={img1}
            alt="Mission"
            className="w-24 h-24 ml-4 object-cover"
          />
        </div>
        <h1 className="font-bold text-xl text-center mb-2">Mission</h1>
        <p className="text-justify mb-2">
         Our mission is to empower businesses by providing
comprehensive HR solutions that drive organizational success and growth. We believe that
the key to any successful business lies in its people, and our goal is to help you build,
manage, and retain a talented workforce.
        </p>
      </div>
      
      <div className=" rounded-xl p-6 border-2 border-black shadow-lg transform transition duration-300 hover:scale-105 max-w-sm md:max-w-md lg:max-w-lg bg-transparent bg-opacity-90 backdrop-blur-sm">
        <div className="flex justify-center mb-4">
          <img
            src={img2}
            alt="Vision"
            className="w-24 h-24 object-cover"
          />
        </div>
        <h1 className="font-bold text-xl text-center mb-2">Vision</h1>
        <p className=" text-justify mb-4">
        Our vision is to be the leading provider of HR services, known for our commitment to
excellence, innovative solutions, and exceptional client service. We aim to create a workplace
where employees thrive and businesses flourish.
        </p>
      </div>
    </div>
  );
}

export default Mission;
