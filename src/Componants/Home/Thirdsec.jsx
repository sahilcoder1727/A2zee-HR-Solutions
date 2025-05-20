import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/imgs/Gimg.png'

function Thirdsec() {
  return (
    <div className="bg-[#F26248]  lg:bg-transparent lg:mt-40  lg:pt-0 pt-4">
      <div className='flex flex-col bg-[#F26248]  lg:h-72 h-84 lg:flex-row items-center  lg:justify-between lg:px-20'>
      
        <div className='lg:w-[1000px] p-2  pt-4 space-y-4  text-left'>
          <h1 className='text-3xl font-bold'>Customized Solutions</h1>
          <p className='text-lg'>
           We recognize that every business is unique. Our customized HR solutions are designed to align with your specific needs and goals. From tailored hiring policies to personalized employee engagement strategies, we provide flexible, scalable services that adapt as your business evolves. Let us help you create a thriving workplace with solutions built just for you.
          </p>
          <div className="flex mt-4 ">
            <Link to="/contact">
              <button className="bg-white text-[#F26248] px-4 py-2 text-md rounded-xl font-bold border-2 border-primaryColor hover:bg-primaryColor hover:text-black">
                Get In Touch <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className='lg:w-1/2  flex ml-28 lg:justify-end lg:mb-[170px]  md:mt-'>
          <img
            src={img}
            alt="Customized Solutions"
            className="w-full max-w-sm lg:h-[460px] h-[300px] lg:max-w-md object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Thirdsec