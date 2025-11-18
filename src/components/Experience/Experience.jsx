import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white tracking-wide">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-300 mt-5 text-lg max-w-3xl mx-auto leading-relaxed">
          A timeline showcasing my work experience, roles, and contributions across
          different organizations.
        </p>
      </div>

      {/* Experience Timeline Container */}
      <div className="relative">

        {/* Center Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-200/40 h-full hidden sm:block"></div>

        {/* Experience Cards */}
        {experiences.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`flex flex-col sm:flex-row items-center relative mb-20 
              ${isLeft ? "sm:justify-end" : "sm:justify-start"}`}
            >
              {/* Timeline Circular Logo */}
              <div
                className={`absolute sm:static left-1/2 -translate-x-1/2 
                bg-white border-4 border-[#8245ec] w-14 h-14 sm:w-16 sm:h-16 
                rounded-full flex justify-center items-center shadow-lg`}
              >
                <img
                  src={item.img}
                  alt={item.company}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Card */}
              <div
                className={`
                w-full sm:max-w-md mt-16 sm:mt-0 p-6 sm:p-8 rounded-2xl 
                bg-gray-900/70 backdrop-blur-lg border border-purple-300/30 
                shadow-[0_0_25px_2px_rgba(130,69,236,0.3)] 
                transition-all duration-300 hover:scale-[1.04] hover:shadow-purple-500
                ${isLeft ? "sm:ml-10" : "sm:mr-10"}
              `}
              >
                {/* Header */}
                <div className="flex items-center space-x-4 sm:space-x-6">
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden shadow-md">
                    <img
                      src={item.img}
                      alt={item.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm text-gray-300">{item.company}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {item.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-white px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-purple-300/40 shadow-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
