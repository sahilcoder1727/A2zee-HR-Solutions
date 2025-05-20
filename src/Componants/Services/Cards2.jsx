import React from "react";
import img from "../assets/imgs/crd1.png";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="pb-16 pt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {/* Card 1 */}
          <div className="bg-white rounded-xl py-6 shadow-lg border-2 border-grey-100  transform transition duration-500 hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src={img}
                alt="Power BI"
                className="w-24 h-24 object-cover"
              />
            </div>
            <div className="border-b-2 ">
              <h1 className="font-bold text-xl text-center mb-6">Talent Acquisition & Recruitment</h1>
              <p className="text-center mb-4 px-4 ">
                Leverage the power of data analytics with Power BI for
                insightful HR reports.
              </p>
            </div>
            <div className="ml-16 py-4">
              <div className="flex  items-center font-bold mb-6">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Strategic workforce planning
                </h3>
              </div>
              <div className="flex items-center font-bold mb-6">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">End-to-end recruitment services</h3>
              </div>
              
            </div>
            <div className="flex justify-center">
              <Link to="/module1">
                <button className="bg-[#F26248] px-2 py-2 rounded-lg mr-2 text-l tracking-widest border-solid border-2 border-primaryColor hover:bg-primaryColor hover:text-white">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 (Middle card) */}
          <div className="bg-white rounded-xl py-6 shadow-lg border-2 border-grey-100  transform transition duration-500 hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src={img}
                alt="Power BI"
                className="w-24 h-24 object-cover"
              />
            </div>
            <div className="border-b-2 ">
              <h1 className="font-bold text-xl text-center mb-6">Employee Onboarding & Training</h1>
              <p className="text-center mb-4 px-4 ">
                Leverage the power of data analytics with Power BI for
                insightful HR reports.
              </p>
            </div>
            <div className="ml-16 py-4">
              <div className="flex  items-center font-bold mb-6">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Interactive dashboards</h3>
              </div>
              <div className="flex items-center font-bold mb-6">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Custom reports</h3>
              </div>
              <div className="flex  items-center font-bold mb-6">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Data visualization</h3>
              </div>
              <div className="flex  items-center font-bold mb-6">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Interactive dashboards</h3>
              </div>
              <div className="flex items-center font-bold mb-6">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Custom reports</h3>
              </div>
              <div className="flex  items-center font-bold">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Data visualization</h3>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/module1">
                <button className="bg-[#F26248] px-2 py-2 rounded-lg mr-2 text-l tracking-widest border-solid border-2 border-primaryColor hover:bg-primaryColor hover:text-white">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl py-6 shadow-lg border-2  transform transition duration-500 hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src={img}
                alt="Power BI"
                className="w-24 h-24 object-cover"
              />
            </div>
            <div className="border-b-2  ">
              <h1 className="font-bold text-xl text-center mb-6">Module2</h1>
              <p className="text-center mb-4 px-4 ">
                Leverage the power of data analytics with Power BI for
                insightful HR reports.
              </p>
            </div>
            <div className="ml-16 py-4">
              <div className="flex  items-center font-bold mb-6">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Interactive dashboards</h3>
              </div>
              <div className="flex items-center font-bold mb-6">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Custom reports</h3>
              </div>
              <div className="flex  items-center font-bold mb-6">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Data visualization</h3>
              </div>
              <div className="flex  items-center font-bold mb-6">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Interactive dashboards</h3>
              </div>
              <div className="flex items-center font-bold mb-6">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Custom reports</h3>
              </div>
              <div className="flex  items-center font-bold">
                 <i className="fa-regular fa-circle-check text-green-500"></i>
                <h3 className="ml-2">Data visualization</h3>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/page">
                <button className="bg-[#F26248] px-2 py-2 rounded-lg mr-2 text-l tracking-widest border-solid border-2 border-primaryColor hover:bg-primaryColor hover:text-white">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
