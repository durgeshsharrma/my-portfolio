import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full hidden sm:block"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative z-10 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:-ml-8 bg-white border-4 border-[#8245ec] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center shadow-md">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
              ${index % 2 === 0
                  ? "sm:ml-20 sm:mr-0"
                  : "sm:mr-20 sm:ml-0"
                } mt-16 sm:mt-0 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                {/* School Logo/Image */}
                <div className="w-20 h-14 bg-white rounded-md overflow-hidden shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">
                Grade: {edu.grade}
              </p>
              <p className="mt-3 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
