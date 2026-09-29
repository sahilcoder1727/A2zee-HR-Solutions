import React from 'react'
import { Link } from 'react-router-dom'

import img from '../assets/imgs/Founderimg2.png'
import directorImg from '../assets/imgs/chief direcotr.jpeg'

function Second() {
  return (
    <div className="bg-[#F26248] py-4">

      {/* ================= FOUNDER ================= */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-around lg:px-20">

        {/* Founder Image */}
        <div className="lg:w-1/2 flex px-2 lg:p-0 justify-center lg:ml-12 lg:mt-0 mt-8">

          <div className="relative group cursor-pointer overflow-hidden duration-500 w-full lg:w-96 h-full rounded-xl bg-zinc-800 text-gray-50 p-5">

            <div>

              <div className="group-hover:scale-110 lg:w-full h-full bg-white rounded-xl duration-500">

                <img
                  src={img}
                  alt="Founder"
                  className="w-full max-w-sm lg:h-[400px] lg:max-w-md object-cover"
                />

              </div>

              <div className="absolute w-68 left-0 pb-10 pl-4 -bottom-14 duration-500 group-hover:-translate-y-12">

                <div className="absolute -z-10 lg:left-10 left-0 lg:w-80 w-full h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>

                <span className="text-xl text-center font-bold mx-10 lg:mx-12">
                  Mrs. Devishwari Prajapat
                </span>

                <p className="group-hover:opacity-100 w-60 text-center mx-14 duration-500 opacity-0">
                  Founder
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Founder Details */}
        <div className="lg:w-1/2 p-4 space-y-2 text-left">

          <h1 className="text-3xl font-bold text-white">
            Founder
          </h1>

          <p className="text-lg text-justify text-white">
            The founder of A2Zee HR Solutions is a visionary entrepreneur
            dedicated to delivering customized HR solutions that drive
            sustainable growth and align with business goals. With a Master
            of Science degree, an MBA, and expertise in HR Analytics from
            IIM Rohtak, she leverages her extensive knowledge to propel
            organizational development and achieve significant milestones.
            Her strategic leadership, honed over more than a decade across
            sectors such as services, engineering, automotive, recruitment,
            and hospitality, brings a wealth of experience to her role.
            Known for her exceptional analytical skills, she adeptly connects
            data with business outcomes, enabling precise analysis,
            prediction, and diagnosis for better decision-making and enhanced
            client results.
          </p>

        </div>

      </div>


      {/* ================= DIRECTOR ================= */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-around lg:px-20 py-12">

        {/* Director Image */}
        <div className="lg:w-1/2 flex px-2 lg:p-0 justify-center lg:ml-12">

          <div className="relative group cursor-pointer overflow-hidden duration-500 w-full lg:w-96 h-full rounded-xl bg-zinc-800 text-gray-50 p-5">

            <div>

              <div className="group-hover:scale-110 lg:w-full h-full bg-white rounded-xl duration-500">

                <img
                  src={directorImg}
                  alt="Director"
                  className="w-full max-w-sm lg:h-[400px] lg:max-w-md object-cover"
                />

              </div>

              <div className="absolute w-68 left-0 pb-10 pl-4 -bottom-14 duration-500 group-hover:-translate-y-12">

                <div className="absolute -z-10 lg:left-10 left-0 lg:w-80 w-full h-40 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>

                <span className="text-xl text-center font-bold mx-10 lg:mx-12">
                  Mukesh Vyas
                </span>

                <p className="group-hover:opacity-100 w-60 text-center mx-14 duration-500 opacity-0">
                  Chief Advisor
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Director Details */}
        <div className="lg:w-1/2 p-4 space-y-2 text-left">

          <h1 className="text-3xl font-bold text-white">
            Chief Advisor
          </h1>

          <p className="text-lg text-justify text-white">
            Mukesh Vyas is an accomplished business leader
with over 22 years of techno-functional and
entrepreneurial experience across IT, Telecom,
Consulting, and Software domains. Currently, he
heads Pre-Sales and Go-To-Market (GTM)
strategies for the Infosys Salesforce Practice
globally across HIL, FSI, and Energy verticals.
Earlier, he spent nine years with Infosys working
with major European telecom clients including
Vodafone and British Telecom. A motivational
speaker, corporate coach, and certified career
counselor, he is also an active thought leader with
national and international publications. He served
as Chairperson of ISTD Jaipur Chapter (2020–2024)
and was Convenor of ISTD NATCON 2023.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Second