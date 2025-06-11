import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-6 justify-center items-center items-stretch">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          className="w-full sm:w-[48%] lg:w-[30%]"
        >
          <div className="flex flex-col h-full bg-gray-900 backdrop-blur-md border border-white shadow-[0_0_15px_1px_rgba(130,69,236,0.3)] rounded-2xl px-6 py-8 transition-transform hover:shadow-purple-500/40">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-auto">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-start gap-3 border border-gray-700 rounded-xl bg-[#1c1b23] px-3 py-2 hover:border-purple-500 transition"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />
                  <span className="text-sm text-gray-300 truncate">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
