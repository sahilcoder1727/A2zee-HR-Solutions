import React from 'react'
import fre18 from '../assets/imgs/fre18.webp'
import "./Module1.css"
import Cards from '../Services/Cards'
function Module1() {
  return (
    <div className=''>  <div className="lg:h-[600px] md:h-[600px] h-[650px] w-full py-16 flex justify-center relative"  style={{ backgroundImage: `url(${fre18})` }}>
    {/* <div className=" h-[700px] absolute h-full w-full background-blur-banner"></div> */}

    <div
          className="relative sm:w-2/3 w-5/6 rounded-lg  px- h-[300px] lg:py-12 lg:px-20 bg-transparent bg-opacity-90 backdrop-blur-sm border border-black mx-4"
          data-aos="fade-up-right"
        >
          <h1 className="xl:text-5xl lg:text-3xl text-2xl font-bold text-center mb-4">
            Module1
          </h1>
          <p className="xl:text-xl lg:text-lg text-base text-center md:block hidden">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta architecto, rerum ducimus laudantium pariatur obcaecati, suscipit ea eos, ratione nesciunt? Officiis possimus sint ipsam obcaecati ea. Quasi, sapiente necessitatibus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vero qui, provident voluptate dolorem 
          </p>
        </div>
  </div>
  <Cards/>
</div>
  )
}

export default Module1