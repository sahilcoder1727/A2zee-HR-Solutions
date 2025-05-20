import React from "react";
import img from "../assets/imgs/Fifthimg.png";

function FifthSec() {
  return (
    <div className="py-2 bg-white">
      <h1 className="text-center font-bold text-3xl mb-4">Why Choose Us?</h1>
      <p className="text-center max-w-2xl mx-auto mb-8">
      Discover the unique benefits of partnering with us for your HR needs. Here’s why we stands out from the rest
      </p>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* First div with image and paragraph */}
        <div className="flex-1 bg-white rounded-lg  p-4 shadow-lg">
          <div className="flex justify-center border-2 mt- mb-4">
            <img src={img} alt="Advanced Tool"
           
             className="  object-cover lg:h-[600px] " />
          </div>
          <p className="text-center font-semibold">
          Expert HR solutions tailored to your needs, ensuring cost-effectiveness, compliance, scalability, and enhanced employee engagement with innovative technologies."
          </p>
        </div>

        {/* Second div with multiple headings and paragraphs */}
        <div className="flex-1  rounded-lg p-4 shadow-lg space-y-4 ">
  <div className="hover:bg-[#F26248] rounded-lg p-4 shadow-lg  transform transition duration-300 hover:scale-105">
    <h2 className="font-bold text-xl mb-2">
      {["•", "Expert", "Guidance"].map((word, index) => (
        <span key={index} className="inline-block transition-all duration-300 hover:bg-white">
          {word}&nbsp;
        </span>
      ))}
    </h2>
    <p>
      {["Our", "HR", "experts", "provide", "guidance", "and", "support", "to", "navigate", "complex", "issues,", "ensuring", "compliance", "and", "best", "practices."].map((word, index) => (
        <span key={index} className="inline-block transition-all duration-300 hover:bg-white">
          {word}&nbsp;
        </span>
      ))}
    </p>
  </div>
  <div className="hover:bg-[#F26248] rounded-lg p-4 shadow-lg transform transition duration-300 hover:scale-105">
    <h2 className="font-bold text-xl mb-2">
      {["•", "Cost-Effective", "Services"].map((word, index) => (
        <span key={index} className="inline-block transition-all duration-300 hover:bg-white">
          {word}&nbsp;
        </span>
      ))}
    </h2>
    <p>
      {["Our", "cost-effective", "services", "help", "you", "save", "on", "overhead", "costs", "of", "hiring", "and", "managing", "an", "in-house", "HR", "team."].map((word, index) => (
        <span key={index} className="inline-block transition-all duration-300 hover:bg-white">
          {word}&nbsp;
        </span>
      ))}
    </p>
  </div>
  <div className="hover:bg-[#F26248] rounded-lg p-4 shadow-lg  transform transition duration-300 hover:scale-105">
    <h2 className="font-bold text-xl mb-2">
      {["•", "Scalability"].map((word, index) => (
        <span key={index} className="inline-block transition-all duration-300 hover:bg-white">
          {word}&nbsp;
        </span>
      ))}
    </h2>
    <p>
      {["Our", "scalable", "services", "adjust", "to", "meet", "your", "changing", "HR", "needs", "as", "your", "business", "grows."].map((word, index) => (
        <span key={index} className="inline-block transition-all duration-300 hover:bg-white">
          {word}&nbsp;
        </span>
      ))}
    </p>
  </div>
  <div className="hover:bg-[#F26248] rounded-lg p-4 shadow-lg  transform transition duration-300 hover:scale-105">
    <h2 className="font-bold text-xl mb-2">
      {["•", "Time-Saving"].map((word, index) => (
        <span key={index} className="inline-block transition-all duration-300 hover:bg-white">
          {word}&nbsp;
        </span>
      ))}
    </h2>
    <p>
      {["Outsourcing", "your", "HR", "functions", "to", "us", "frees", "up", "your", "time", "to", "focus", "on", "other", "core", "aspects", "of", "your", "business."].map((word, index) => (
        <span key={index} className="inline-block transition-all duration-300 hover:bg-white">
          {word}&nbsp;
        </span>
      ))}
    </p>
  </div>
  <div className="hover:bg-[#F26248] rounded-lg p-4 shadow-lg  transform transition duration-300 hover:scale-105">
    <h2 className="font-bold text-xl mb-2">
      {["•", "Customized", "Solutions"].map((word, index) => (
        <span key={index} className="inline-block transition-all duration-300 hover:bg-white">
          {word}&nbsp;
        </span>
      ))}
    </h2>
    <p>
      {["Outsourcing", "your", "HR", "functions", "to", "us", "frees", "up", "your", "time", "to", "focus", "on", "core", "aspects", "of", "your", "business."].map((word, index) => (
        <span key={index} className="inline-block transition-all duration-300 hover:bg-white">
          {word}&nbsp;
        </span>
      ))}
    </p>
  </div>
  <div className="hover:bg-[#F26248] rounded-lg p-4 shadow-lg  transform transition duration-300 hover:scale-105">
    <h2 className="font-bold text-xl mb-2">
      {["•", "Risk", "Mitigation"].map((word, index) => (
        <span key={index} className="inline-block transition-all duration-300 hover:bg-white">
          {word}&nbsp;
        </span>
      ))}
    </h2>
    <p>
      {["Partnering", "with", "us", "mitigates", "risks", "related", "to", "HR", "compliance,", "employee", "relations,", "and", "other", "HR", "issues."].map((word, index) => (
        <span key={index} className="inline-block transition-all duration-300 hover:bg-white">
          {word}&nbsp;
        </span>
      ))}
    </p>
  </div>
</div>

      </div>
    </div>
  );
}

export default FifthSec;
