import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/imgs/Gimg3.png'

function Thirdsec() {
  return (
    <div className="md:bg-[#F26248] mt-16">
      <div className='flex flex-col bg-[#F26248]  lg:h-64 lg:flex-row items-center  lg:justify-between lg:px-20'>
      
        <div className='lg:w-2/3 p-8   space-y-8  text-left'>
          <h1 className='text-3xl font-bold'>Join us if you require a custom package tailored to your needs.</h1>
          {/* <p className='text-lg'>
          Explore our diverse HR services designed to optimize organizational effectiveness and employee engagement. From strategic talent acquisition and performance management to compliance and training solutions, we tailor our offerings to meet your specific needs. 
          </p> */}
          <div className="flex mt-4">
            <Link to="/contactus">
              <button className="bg-white text-[#F26248] font-bold px-4 py-2 text-md rounded-xl border-2 border-primaryColor hover:bg-primaryColor hover:text-black">
                Join Us  <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className='lg:w-full flex ml-28 lg:justify-end justify-center lg:mb-[87px]  md:mt-'>
          <img
            src={img}
            alt="Customized Solutions"
            className="lg:w-full  lg:h-[345px] max-w-md lg:max-w-lg lg:mr-0 mx-auto w-full  mr-28 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Thirdsec
