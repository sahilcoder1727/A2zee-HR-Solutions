import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/logo.png';
import b1 from '../assets/imgs/Blogbnr3.png';

function First() {
  return (
    
    <div className='pb-8'>
      <div
        className='lg:h-[500px] md:h-[600px] h-[600px] w-full py-16 flex justify-center relative'
        style={{ backgroundImage: `url(${b1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='relative rounded-lg px-4 h-20  mt-28 pt-4 lg:px-20 background-blur-banner bg-opacity-90 backdrop-blur-sm border border-white text-white'>
          <h1 className='xl:text-5xl lg:text-3xl text-[#F26248] text-2xl font-bold  mt-2 lg:mt-0'>
           Blogs
          </h1>
        
        </div>
      </div>
    </div>
  );
}

export default First;
