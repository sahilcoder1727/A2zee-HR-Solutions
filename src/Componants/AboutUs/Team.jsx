import React from 'react'
import img from '../assets/imgs/thirdimg.png'
function Team() {
  return (
    <div className='mt-8 '>
      <h1 className='lg:text-3xl text-3xl  w-60 font-bold mx-auto  '>Meet Our Team</h1>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 mt-8 sm:grid-cols-1 justify-center">
      {/* Card 1 */}
      <div class="relative flex w-80 flex-col  rounded-xl bg-[#F26248] bg-clip-border text-black shadow-md transform transition duration-300 hover:scale-105">
  <div class="relative mx-4 mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r bg-white">
  <img
            src={img}
            alt="Customized Solutions"
            className="w-full max-w-sm  lg:max-w-md object-cover"
          />
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Name
    </h5>
    <p class="block text-xl text-white leading-relaxed text-inherit antialiased">
    Designation
    </p>
  </div>
 
</div>


<div class="relative flex w-80 flex-col  rounded-xl bg-[#F26248] bg-clip-border text-black shadow-md transform transition duration-300 hover:scale-105">
  <div class="relative mx-4 mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r bg-white">
  <img
            src={img}
            alt="Customized Solutions"
            className="w-full max-w-sm  lg:max-w-md object-cover"
          />
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Name
    </h5>
    <p class="block text-xl text-white leading-relaxed text-inherit antialiased">
    Designation
    </p>
  </div>
 
</div>
  
<div class="relative flex w-80 flex-col  rounded-xl bg-[#F26248]  bg-clip-border text-black shadow-md transform transition duration-300 hover:scale-105">
  <div class="relative mx-4 mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r bg-white">
  <img
            src={img}
            alt="Customized Solutions"
            className="w-full max-w-sm  lg:max-w-md object-cover"
          />
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Name
    </h5>
    <p class="block text-xl text-white leading-relaxed text-inherit antialiased">
    Designation
    </p>
  </div>
 
</div>
</div>
    </div>
  )
}

export default Team