import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          A brief journey of the roles and experience gained over time.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[3px] bg-purple-400 h-full rounded-full hidden sm:block"></div>

        {/* Entries */}
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            className={`flex items-center relative mb-20 ${i % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              }`}
          >
            {/* Timeline Dot */}
            {/* <div className="absolute left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-ml-8 z-20">
              <div className="w-16 h-16 bg-white border-4 border-purple-500 rounded-full shadow-lg overflow-hidden">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}

            {/* Card */}
            <div
              className={`w-full sm:max-w-md bg-gray-900 border border-gray-600 text-gray-300 p-6 sm:p-8 rounded-2xl shadow-[0_4px_40px_rgba(130,69,236,0.3)] backdrop-blur-md 
              mt-20 sm:mt-0 hover:scale-[1.02] transition-all duration-300 
              ${i % 2 === 0 ? "sm:ml-20" : "sm:mr-20"}`}
            >
              {/* Role and Company */}
              <div className="flex items-center space-x-5">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>


                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <h4 className="text-sm text-gray-400">{exp.company}</h4>
                  <p className="text-xs text-gray-500 mt-1">{exp.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 leading-relaxed">{exp.desc}</p>

              {/* Skills */}
              <div className="mt-5">
                <h5 className="text-white font-medium mb-1">Skills:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-600/80 text-gray-100 px-3 py-1 text-xs sm:text-sm rounded-lg border border-purple-400 shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
