import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import img from "../assets/imgs/S1.png";
import img2 from "../assets/imgs/S2.png";
import img3 from "../assets/imgs/S3.png";
import img4 from "../assets/imgs/S4.png";
import img5 from "../assets/imgs/S5.png";
import img6 from "../assets/imgs/S6.png";
import img7 from "../assets/imgs/S7.png";
import img8 from "../assets/imgs/S8.png";
import img9 from "../assets/imgs/S9.png";
function Cards() {
  return (
    <div className="py-16 lg:px-0   ">
      <h1 className="text-center font-bold text-3xl mb-4">Our Services</h1>
      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
        {/* Card 1: Talent Acquisition & Recruitment */}
        <div className="card-container">
          <div className="card">
            <div className="bg">
              <div class="w-24 h-24 mb-4 mt-4 bg-[#F26248]  rounded-full border-4 border-black z-10 mx-auto ">
                <img
                  src={img}
                  alt="Logo"
                  className=" object-cover ml-1  cursor-pointer"
                />
              </div>
              <div className="card-text mt-4 h-16">
                <h1 className="font-bold text-lg text-center mb-4">
                  Talent Acquisition & Recruitment
                </h1>
              </div>
              <div className="ml-4  h-24">
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Strategic workforce planning</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">End-to-end recruitment services</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Advanced sourcing technique</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm"> Employer brandings</p>
                </div>
              </div>
              <div className="flex justify-center align-baseline mt-24">
                <Link to="/contactus">
                  <button className="bg-[#F26248] font-bold px-4 py-2 text-md rounded-xl border-2 border-primaryColor hover:bg-primaryColor hover:text-white">
                    Get In Touch <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>

        {/* Card 2: Employee Onboarding & Training */}
        <div className="card-container">
          <div className="card">
            <div className="bg">
              <div class="w-24 h-24 mb-4 bg-[#F26248] mt-4 rounded-full border-4 border-black z-10 mx-auto ">
                <img
                  src={img2}
                  alt="Logo"
                  className=" object-cover ml-4 h-12 mt-4 cursor-pointer"
                />
              </div>
              <div className="card-text mt-4 h-16">
                <h1 className="font-bold text-lg text-center mb-4">
                  Employee Onboarding & Training
                </h1>
              </div>
              <div className="ml-4 h-24">
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Customized onboarding programs</p>
                </div>
                <div className="flex items-center font-semibold mb-3">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Employee orientation and training</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Leadership development</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm"> Continuous learning opportunities</p>
                </div>
              </div>
              <div className="flex justify-center align-baseline mt-24">
                <Link to="/contactus">
                  <button className="bg-[#F26248] font-bold px-4 py-2 text-md rounded-xl border-2 border-primaryColor hover:bg-primaryColor hover:text-white">
                    Get In Touch <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>

        {/* Card 3: Performance Management */}
        <div className="card-container">
          <div className="card  h-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg">
              <div class="w-24 h-24 mb-4 bg-[#F26248] mt-4 rounded-full border-4 border-black z-10 mx-auto ">
                <img
                  src={img3}
                  alt="Logo"
                  className=" object-cover mx-auto h-14 mt-2 cursor-pointer"
                />
              </div>
              <div className="card-text mt-4 h-16">
                <h1 className="font-bold text-lg text-center mb-4">
                  Performance Management System
                </h1>
              </div>
              <div className="ml-4 h-24">
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Goal setting & performance appraisals</p>
                </div>
                <div className="flex item-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check mt-1 text-green-500"></i>
                  <p className="ml-2 text-sm">Define KRAs & KPIs</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Employee development programs</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check  text-green-500"></i>
                  <p className="ml-2 text-sm">
                     {/* feedback on one on one interaction */}
                     360<sup>°</sup> analysis
                  </p>
                </div>
              </div>
              <div className="flex justify-center align-baseline mt-24">
                <Link to="/contactus">
                  <button className="bg-[#F26248] font-bold px-4 py-2 text-md rounded-xl border-2 border-primaryColor hover:bg-primaryColor hover:text-white">
                    Get In Touch <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>

        {/* Card 4: HR Compliance & Legal Advisory */}
        <div className="card-container">
          <div className="card">
            <div className="bg">
              <div class="w-24 h-24 mb-4 bg-[#F26248] mt-4 rounded-full border-4 border-black z-10 mx-auto ">
                <img
                  src={img4}
                  alt="Logo"
                  className=" object-cover mx-auto h-14 mt-2 cursor-pointer"
                />
              </div>
              <div className="card-text mt-4 h-16">
                <h1 className="font-bold text-lg text-center mb-4">
                  HR Compliance & Legal Advisory
                </h1>
              </div>
              <div className="ml-4 pt-2 h-24 ">
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Compliance audits & risk management</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Policy development & implementation</p>
                </div>
               
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Legal advisory services</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Labor law adherence
                  </p>
                </div>
              </div>
              <div className="flex justify-center align-baseline mt-24">
                <Link to="/contactus">
                  <button className="bg-[#F26248] font-bold px-4 py-2 text-md rounded-xl border-2 border-primaryColor hover:bg-primaryColor hover:text-white">
                    Get In Touch <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>

        {/* Card 5: Employee Engagement & Retention Strategies */}
        <div className="card-container">
          <div className="card">
            <div className="bg">
              <div class="w-24 h-24 mb-4 bg-[#F26248] mt-4 rounded-full border-4 border-black z-10 mx-auto ">
                <img
                  src={img5}
                  alt="Logo"
                  className=" object-cover ml-1 h-16  cursor-pointer"
                />
              </div>
              <div className="card-text mt-4 h-16">
                <h1 className="font-bold text-lg text-center mb-4">
                  Employee Engagement & Retention Strategies
                </h1>
              </div>
              <div className="ml-4 pt-4 h-24">
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Employee satisfaction surveys</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Engagement programs and initiatives</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Retention strategies and interventions</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Regular feedback sessions</p>
                </div>
              </div>
              <div className="flex justify-center align-baseline mt-24">
                <Link to="/contactus">
                  <button className="bg-[#F26248] font-bold px-4 py-2 text-md rounded-xl border-2 border-primaryColor hover:bg-primaryColor hover:text-white">
                    Get In Touch <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>

        {/* Card 6: Customized HR Consulting */}
        <div className="card-container">
          <div className="card">
            <div className="bg">
              <div class="w-24 h-24 mb-4 bg-[#F26248] mt-4  rounded-full border-4 border-black z-10 mx-auto ">
                <img
                  src={img6}
                  alt="Logo"
                  className=" object-cover mx-auto h-14 mt-2 cursor-pointer"
                />
              </div>
              <div className="card-text mt-4 h-16">
                <h1 className="font-bold text-lg text-center mb-4">
                  Customized HR Consulting
                </h1>
              </div>
              <div className="ml-4 pt-4 h-24">
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Organizational development</p>
                </div>
                {/* <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Change management</p>
                </div> */}
                <div className="flex items-center font-semibold mb-5">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">HR strategy and planning</p>
                </div>
                <div className="flex items-center font-semibold mb-5">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm"> Expert HR advice</p>
                </div>
              </div>
              <div className="flex justify-center align-baseline mt-24">
                <Link to="/contactus">
                  <button className="bg-[#F26248] font-bold px-4 py-2 text-md rounded-xl border-2 border-primaryColor hover:bg-primaryColor hover:text-white">
                    Get In Touch <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>

        {/* Card 7: Trainings */}
        <div className="card-container">
          <div className="card">
            <div className="bg">
              <div class="w-24 h-24 mt-4 mb-4 bg-[#F26248]  rounded-full border-4 border-black z-10 mx-auto ">
                <img
                  src={img7}
                  alt="Logo"
                  className=" object-cover mx-auto h-14 mt-2 cursor-pointer"
                />
              </div>
              <div className="card-text mt-4 h-16">
                <h1 className="font-bold text-lg text-center mb-4">
                  Trainings & Development 
                </h1>
              </div>
              <div className="ml-4 pt-4 h-24">
                <div className="flex items-start  font-semibold mb-4">
                  <i className="fa-regular fa-circle-check mt-1 text-green-500"></i>
                  <p className="ml-2 text-sm">Customized training</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Analyze the training</p>
                </div>
                <div className="flex items-start  font-semibold mb-4">
                  <i className="fa-regular fa-circle-check mt-1 text-green-500"></i>
                  <p className="ml-2 text-sm">Skill enhancement modules</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm"> Training effectiveness evaluation</p>
                </div>
              </div>
              <div className="flex justify-center align-baseline mt-24">
                <Link to="/contactus">
                  <button className="bg-[#F26248] font-bold px-4 py-2 text-md rounded-xl border-2 border-primaryColor hover:bg-primaryColor hover:text-white">
                    Get In Touch <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>

        {/* Card 8: Budget */}
        <div className="card-container">
          <div className="card">
            <div className="bg">
              <div class="w-24 h-24 mb-4 mt-4 bg-[#F26248]  rounded-full border-4 border-black z-10 mx-auto ">
                <img
                  src={img8}
                  alt="Logo"
                  className=" object-cover mx-auto h-14 mt-2 cursor-pointer"
                />
              </div>
              <div className="card-text mt-4 h-16">
                <h1 className="font-bold text-lg text-center mb-4">Budget</h1>
              </div>
              <div className="ml-4 pt-4 h-24">
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Human Resources Budget</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm"> Future financial forecasting </p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Resource allocation</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Expense monitoring</p>
                </div>
              </div>
              <div className="flex justify-center align-baseline mt-24">
                <Link to="/contactus">
                  <button className="bg-[#F26248] font-bold px-4 py-2 text-md rounded-xl border-2 border-primaryColor hover:bg-primaryColor hover:text-white">
                    Get In Touch <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>

        {/* Card 9: Analysis Reports and Visualization */}
        <div className="card-container">
          <div className="card">
            <div className="bg">
              <div class="w-24 h-24 mb-4 mt-4 bg-[#F26248]  rounded-full border-4 border-black z-10 mx-auto ">
                <img
                  src={img9}
                  alt="Logo"
                  className=" object-cover mx-auto h-14 mt-2 cursor-pointer"
                />
              </div>
              <div className="card-text mt-4 h-16">
                <h1 className="font-bold text-lg text-center mb-4">
                  Analysis Reports & Visualization
                </h1>
              </div>
              <div className="ml-4 pt-4 h-24">
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Data-oriented solutions</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Reports visualization</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Using BI Tools(Power BI,Tableau)</p>
                </div>
                <div className="flex items-center font-semibold mb-4">
                  <i className="fa-regular fa-circle-check text-green-500"></i>
                  <p className="ml-2 text-sm">Accessible report presentation</p>
                </div>
              </div>
              <div className="flex justify-center align-baseline mt-24">
                <Link to="/contactus">
                  <button className="bg-[#F26248] font-bold px-4 py-2 text-md rounded-xl border-2 border-primaryColor hover:bg-primaryColor hover:text-white">
                    Get In Touch <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="blob"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
