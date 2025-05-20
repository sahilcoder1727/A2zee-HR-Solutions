import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/imgs/Founderimg2.png'

function Second() {
  return (
    <div className="md:bg-[#F26248]  py-4">
       
      <div className='flex flex-col bg-[#F26248]   lg:flex-row items-center lg:items-start lg:justify-around lg:px-20'>
      <div className='lg:w-1/2 flex px-2 lg:p-0 justify-center lg:ml-12 lg:mt-0 mt-8'>
      {/* <div className='  mt-4  border-2 py-4 border-black border-spacing-1 bg-white  rounded-xl '>
          <img
            src={img}
            alt="Customized Solutions"
            className="w-full max-w-sm h-[400px] lg:max-w-md  object-cover  "
          />
          <p className='text-black text-3xl'>Ms.Deveshwari Prajapat</p>
          <p className='text-white '></p>
        </div> */}
        <div
  class="relative group cursor-pointer overflow-hidden duration-500 w-full lg:w-96 h-full rounded-xl bg-zinc-800 text-gray-50 p-5"
>
  <div class="">
    <div
      class="group-hover:scale-110 lg:w-full h-full bg-white rounded-xl duration-500"
    >
       <img
            src={img}
            alt="Customized Solutions"
            className="w-full max-w-sm lg:h-[400px] lg:max-w-md  object-cover  "
          />
    </div>
    <div
      class="absolute w-68 left-0 pb-10 pl-4 -bottom-14 duration-500 group-hover:-translate-y-12"
    >
      <div
        class="absolute -z-10 lg:left-10 left-0 lg:w-80 w-full  h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"
      ></div>
      <span class="text-xl text-center font-bold mx-10  lg:mx-12">Mrs. Devishwari Prajapat</span>
      <p class="group-hover:opacity-100 w-60 text-center mx-14 duration-500 opacity-0">
        Founder 
      </p>
    </div>
  </div>
</div>

        
        </div>
        <div className='lg:w-1/2 p-4   space-y-2  text-left'>
          <h1 className='text-3xl font-bold text-white'>Founder</h1>
          <p className='text-lg text-justify text-white'>
          The founder of A2Zee HR Solutions is a visionary entrepreneur dedicated to delivering customized HR solutions that drive sustainable growth and align with business goals. With a Master of Science degree, an MBA, and expertise in HR Analytics from IIM Rohtak, she leverages her extensive knowledge to propel organizational development and achieve significant milestones. Her strategic leadership, honed over more than a decade across sectors such as services, engineering, automotive, recruitment, and hospitality, brings a wealth of experience to her role. Known for her exceptional analytical skills, she adeptly connects data with business outcomes, enabling precise analysis, prediction, and diagnosis for better decision-making and enhanced client results.
          </p>
          
        </div>
       
      </div>
    </div>
  )
}

export default Second
