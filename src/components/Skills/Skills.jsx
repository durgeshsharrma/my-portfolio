import React from "react";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </motion.div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-6 justify-center items-center items-stretch">
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            rotateX: 5,
            rotateY: 5,
            transition: { duration: 0.2 }
          }}
          className="w-full sm:w-[48%] lg:w-[30%]"
        >
          <div className="flex flex-col h-full bg-gray-900/80 backdrop-blur-md border border-white/10 shadow-[0_0_15px_1px_rgba(130,69,236,0.3)] rounded-2xl px-6 py-8 transition-colors hover:border-purple-500/50 hover:shadow-purple-500/40">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-auto">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-start gap-3 border border-gray-700/50 rounded-xl bg-[#1c1b23]/50 px-3 py-2 hover:border-purple-500 hover:bg-[#1c1b23] transition-all duration-300 group"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm text-gray-300 truncate group-hover:text-white">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
