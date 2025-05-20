import React from "react";
import img from "../assets/imgs/Card2.png";
import img1 from "../assets/imgs/Card3.png";
import img2 from "../assets/imgs/Card4.png";
import img5 from "../assets/imgs/Card5.png";
function Cards() {
  return (
    <div className="py-8 mb-4 lg:mt-10 space-y-4">
      <h1 className="text-center font-bold text-3xl">Our Core Values</h1>
      <p className="text-center">We offer an all-in one service with which you can hire, pay and employ</p>
      <div className="lg:flex   justify-center">
        {/* card1 */}
          <div class="group before:hover:scale-95 mt-8  lg:mt-2 mx-auto before:hover:h-72 before:hover:w-80 hover:shadow-2xl before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-white via-orange-400 to-[#F26248] before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div class="w-16 h-16 mb-2 bg-[#F26248] mt-10 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-20  group-hover:-translate-y-12 transition-all duration-500">
            <img
              src={img}
              alt="Logo"
              className=" object-cover ml-1  cursor-pointer"
            />
          </div>
          <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
            <h1 class="text-2xl font-semibold">Integrity</h1>
            <p className="px-2">We uphold the highest standards of honesty and ethics, ensuring transparent and open communication with clients and employees.

</p>
          </div>
          
        </div>
        {/* * card1 * */}

        {/* card1 */}
        <div class="group before:hover:scale-95 mt-8  lg:mt-2 mx-auto before:hover:h-72 before:hover:w-80 hover:shadow-2xl before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-white via-orange-400 to-[#F26248] before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div class="w-16 h-16 mb-2 bg-[#F26248] mt-10 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-20  group-hover:-translate-y-12 transition-all duration-500">
            <img
              src={img1}
              alt="Logo"
              className=" object-cover  cursor-pointer"
            />
          </div>
          <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
            <h1 class="text-2xl font-semibold">Client Focus</h1>
            <p className="px-2">Our customized HR solutions are designed to meet the unique needs of each client, consistently aiming to exceed their expectations.
            </p>
       
          </div>
          
        </div>
        {/* * card1 * */}

        {/* card1 */}
        <div class="group before:hover:scale-95 mt-8  lg:mt-2 mx-auto before:hover:h-72 before:hover:w-80 hover:shadow-2xl before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-white via-orange-400 to-[#F26248] before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div class="w-16 h-16 mb-2 bg-[#F26248] mt-10 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-20  group-hover:-translate-y-12 transition-all duration-500">
            <img
              src={img2}
              alt="Logo"
              className=" object-cover  cursor-pointer"
            />
          </div>
          <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
            <h1 class="text-2xl font-semibold">Innovation</h1>
            <p className="px-2">Embracing new technologies and continuous improvement, we provide cutting-edge HR solutions to keep our clients ahead in their industry.
            </p>
      
          </div>
          
        </div>
        {/* * card1 * */}

        {/* card1 */}
        <div class="group before:hover:scale-95 mt-8  lg:mt-2 mx-auto before:hover:h-72 before:hover:w-80 hover:shadow-2xl before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-white via-orange-400 to-[#F26248] before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div class="w-16 h-16 mb-2 bg-[#F26248] mt-10 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-20  group-hover:-translate-y-12 transition-all duration-500">
            <img
              src={img5}
              alt="Logo"
              className=" object-cover  cursor-pointer"
            />
          </div>
          <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
            <h1 class="text-2xl font-semibold">Collaboration</h1>
            <p className="px-2">We foster teamwork and build strong, long-term partnerships with clients based on mutual respect, trust, and shared goals</p>
          </div>
          
        </div>
        {/* * card1 * */}
      </div>
    </div>
  );
}

export default Cards;
