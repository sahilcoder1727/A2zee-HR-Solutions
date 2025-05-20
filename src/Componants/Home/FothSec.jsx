import React from "react";
import img from "../assets/imgs/fc1.png";
import img2 from "../assets/imgs/fc2.png";
import img3 from "../assets/imgs/fc3.png";
import img4 from "../assets/imgs/fc4.png";
import img5 from "../assets/imgs/fc5.png";
import img6 from "../assets/imgs/fc6.png";
import img7 from "../assets/imgs/fc7.png";

function ForthSec() {
  return (
    <div className="py-8 bg-white">
      <h1 className="text-center font-bold text-3xl mb-4">
        Our Advanced Tools & Technologies
      </h1>
      <p className="text-center max-w-2xl mx-auto mb-8">
        Explore the cutting-edge tools and technologies we use to deliver
        exceptional HR solutions, ensuring efficiency, compliance, and employee
        satisfaction.
      </p>
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="bg-[#F26248] rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src={img}
                alt="Power BI"
                className="w-20 h-20 object-cover "
              />
            </div>

            <h1 className="font-bold text-xl text-center mb-4">BI tools</h1>
            <p className="text-center mb-4">
            Transforming Data Into Actionable Insights with Cutting-edge BI Tools
            </p>
            <div className="flex flex-col pl-14  lg:px-28">
              <div className="flex  justify-start items-center font-bold mb-2">
                <i className="fa-regular fa-circle-check"></i>
                <h3 className="ml-2">Power BI</h3>
              </div>
              <div className="flex :justify-start items-center font-bold mb-2">
                <i className="fa-regular fa-circle-check"></i>
                <h3 className="ml-2">Tableau</h3>
              </div>
             
            </div>
          </div>

          <div className="bg-[#F26248] rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src={img2}
                alt="Power BI"
                className="w-20 h-20 object-cover "
              />
            </div>
            <h1 className="font-bold text-xl text-center mb-2">ATS</h1>
            <p className="text-center mb-4">
              Efficiently manage your recruitment process with our advanced ATS
              solution.{" "}
            </p>
            <div className="flex flex-col pl-14 lg:pl-28">
              <div className="flex justify-start items-center font-bold mb-2">
                <i className="fa-regular fa-circle-check"></i>
                <h3 className="ml-2">Zoho</h3>
              </div>
              <div className="flex justify-start items-center font-bold mb-2">
                <i className="fa-regular fa-circle-check"></i>
                <h3 className="ml-2">Smart Reqruiter</h3>
              </div>
             
            </div>
          </div>

          <div className="bg-[#F26248] rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105">
            <div className="flex justify-center mb-4">
              <img
                src={img3}
                alt="Power BI"
                className="w-20 h-20 object-cover "
              />
            </div>
            <h1 className="font-bold text-xl text-center mb-2">
              HRMS
            </h1>
            <p className="text-center mb-4">
            Streamlining HR Operations with Intuitive and Efficient HRMS Solutions.{" "}
            </p>
            <div className="flex flex-col lg:pl-28 pl-14">
              <div className="flex justify-start items-center font-bold mb-2">
                <i className="fa-regular fa-circle-check"></i>
                <h3 className="ml-2">Keka</h3>
              </div>
              <div className="flex justify-start items-center font-bold mb-2">
                <i className="fa-regular fa-circle-check"></i>
                <h3 className="ml-2">greytHR</h3>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForthSec;
