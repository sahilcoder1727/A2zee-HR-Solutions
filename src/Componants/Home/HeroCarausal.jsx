import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/imgs/Heroimg.png";
import imgL from "../assets/imgs/Heroimg.png";
import img2 from "../assets/imgs/herobnr11.png";
import img3 from "../assets/imgs/Herobnr311.png";
import img4 from "../assets/imgs/Herobnr7.png";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  return (
    <div className="relative w-full mb-8">
      {/* Desktop View */}
      <div className="hidden lg:block">
        <Carousel
          autoPlay={true}
          interval={3000}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          transitionTime={1000}
          infiniteLoop={true}
          className="max-w-full lg:h-full rounded-none"
        >
          <div className="flex justify-center items-center bg-black  dark:text-white">
            <div className="relative flex flex-col bg-black  justify-center items-start text-left">
              <img
                src={imgL}
                alt="Slide 1"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-start px-4 lg:px-8">
                <h1 className="text-white text-3xl lg:text-5xl font-bold mb-4">
                  HR Solutions Tailored<br /> for Success
                </h1>
                <p className="text-lg lg:text-xl font-bold text-[#F26248]">
                  Experience seamless HR management <br/>with A2Zee HR SOLUTIONS,
                  where expertise<br/> meets efficiency for sustainable growth.
                </p>
                <Link to="/contactus">
                  <button className="mt-4 inline-block bg-white font-bold text-[#F26248] hover:text-black py-2 px-6 rounded-xl text-sm lg:text-base">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className="relative flex flex-col justify-center items-start text-left">
              <img
                src={img2}
                alt="Slide 2"
                className="object-cover w-full h-full"
              />
               <div className="absolute inset-0 flex flex-col justify-center items-start text-start px-4 lg:px-8">
                <h1 className="text-white text-3xl lg:text-5xl font-bold mb-4">
                  Customized HR Strategies <br /> for Optimal Business
                </h1>
                <p className="text-lg lg:text-xl font-bold text-[#F26248]">
                  Crafting bespoke HR strategies to boost business success<br /> 
                  through tailored talent management, & workforce optimization solutions.
                </p>
                <Link to="/contactus">
                  <button className="mt-4 inline-block bg-white text-[#F26248] font-bold hover:text-black py-2 px-6 rounded-xl text-sm lg:text-base">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className="relative flex flex-col justify-center items-start text-left">
              <img
                src={img3}
                alt="Slide 3"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-start px-4 lg:px-8">
                <h1 className="text-white text-3xl lg:text-5xl font-bold mb-4">
                  Navigating HR Challenges<br /> Empowering Your Team
                </h1>
                <p className="text-lg lg:text-xl font-bold text-[#F26248]">
                  Transforming talent into business advantage<br /> 
                  We partner with you for strategic HR empowerment and organizational success.
                </p>
                <Link to="/contactus">
                  <button className="mt-4 inline-block bg-white font-bold text-[#F26248] hover:text-black py-2 px-6 rounded-xl text-sm lg:text-base">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="flex justify-center items-center bg-black dark:text-white">
            <div className="relative flex flex-col justify-center items-start text-left w-full h-full">
              <img
                src={img4}
                alt="Slide 4"
                className="object-cover w-full h-full opacity-50"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-start px-4 lg:px-8">
                <h1 className="text-white text-3xl lg:text-5xl font-bold mb-4">
                  Data Driven Solutions<br /> And Innovation 
                </h1>
                <p className="text-lg lg:text-xl font-bold text-[#F26248]">
                  Cultivating insights through meticulous data management with A2Zee HR Solutions empowering informed decision-making for organizational success.
                </p>
                <Link to="/contactus">
                  <button className="mt-4 inline-block bg-white font-bold text-[#F26248] hover:text-black py-2 px-6 rounded-xl text-sm lg:text-base">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden">
        <Carousel
          autoPlay={true}
          interval={3000}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          transitionTime={2000}
          infiniteLoop={true}
          className="w-full h-[300px] rounded-none"
        >
          <div className="flex justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className="relative flex flex-col justify-center items-start text-left w-full h-full">
              <img
                src={img1}
                alt="Slide 1"
                className="object-cover w-full h-[300px]"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 lg:px-8">
                <h1 className="text-[#F26248] text-xl lg:text-3xl font-bold mb-4">
                  HR Solutions Tailored for Success
                </h1>
                <p className="text-base lg:text-lg text-white">
                  Experience seamless HR management with A2Zee HR SOLUTIONS,
                  where expertise meets efficiency for sustainable growth.
                </p>
                <Link to="/contactus">
                  <button className="mt-4 inline-block bg-white text-[#F26248] hover:text-black py-2 px-6 rounded-xl text-sm lg:text-base">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Repeat for additional slides */}
          <div className="flex justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className="relative flex flex-col justify-center items-start text-left w-full h-full">
              <img
                src={img2}
                alt="Slide 2"
                className="object-cover w-full h-[300px]"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 lg:px-8">
                <h1 className="text-[#F26248] text-xl lg:text-3xl font-bold mb-4 ">
                  Customized HR Strategies for Optimal Business Performance
                </h1>
                <p className="text-base lg:text-lg text-white">
                  Crafting bespoke HR strategies to boost business success through tailored talent management, development, and workforce optimization solutions.
                </p>
                <Link to="/contactus">
                  <button className="mt-4 inline-block bg-white font-bold text-[#F26248] hover:text-black py-2 px-6 rounded-xl text-sm lg:text-base">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className="relative flex flex-col justify-center items-start text-left w-full h-full">
              <img
                src={img3}
                alt="Slide 3"
                className="object-cover w-full h-[300px]"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 lg:px-8">
                <h1 className="text-[#F26248] text-xl lg:text-3xl font-bold mb-4 ">
                  Navigating HR Challenges<br /> Empowering Your Team
                </h1>
                <p className="text-base lg:text-lg text-white">
                  Transforming talent into business advantage. We partner with you for strategic HR empowerment and organizational success.
                </p>
                <Link to="/contactus">
                  <button className="mt-4 inline-block bg-white font-bold text-[#F26248] hover:text-black py-2 px-6 rounded-xl text-sm lg:text-base">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center bg-black dark:text-white">
            <div className="relative flex flex-col justify-center items-start text-left w-full h-full">
              <img
                src={img4}
                alt="Slide 4"
                className="object-cover w-full h-[300px] opacity-50"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 lg:px-8">
                <h1 className="text-[#F26248] text-xl lg:text-3xl font-bold mb-4">
                  Data Driven Solutions and Innovation 
                </h1>
                <p className="text-base lg:text-lg text-white">
                  Cultivating insights through meticulous data management with A2Zee HR Solutions empowering informed decision-making for organizational success.
                </p>
                <Link to="/contactus">
                  <button className="mt-4 inline-block bg-white font-bold text-[#F26248] hover:text-black py-2 px-6 rounded-xl text-sm lg:text-base">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;
