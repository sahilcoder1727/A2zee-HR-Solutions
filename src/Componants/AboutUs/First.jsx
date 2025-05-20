import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/logo.png';
import b1 from '../assets/imgs/AboutBnr2.png';

function First() {
  return (
    <div className='pb-8'>
      <div
        className='lg:h-[500px] md:h-[600px] h-[600px] w-full py-16 flex justify-center relative'
        style={{ backgroundImage: `url(${b1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='relative sm:w-2/3  w-5/6 rounded-lg px-8 h-fit py-4 lg:px-20 background-blur-banner bg-opacity-90 backdrop-blur-sm border border-white text-white'>
          <h1 className='xl:text-5xl lg:text-3xl text-[#F26248] text-2xl font-bold text-center mb-4'>
            About Us
          </h1>
          <p className='xl:text-xl lg:text-lg text-base text-center'>
         We are passionate about transforming workplaces through innovative HR solutions. With a dedicated team of HR professionals, we specialize in tailoring strategies that meet the unique needs of your business. Whether you're a startup navigating growth challenges or an established enterprise seeking operational efficiency, we are here to support your journey.
          </p>
          {/* <div className='flex justify-center mt-4'>
            <Link to='/about' className='bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800'>
              Learn More
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default First;
