import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[7vw] lg:px-[16vw] font-sans relative bg-skills-gradient clip-path-custom-1"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-gray-900 border border-white rounded-2xl shadow-[0_0_15px_2px_rgba(130,69,236,0.2)] overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 pt-2 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4 py-8 overflow-y-auto">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple-500 z-50"
            >
              &times;
            </button>

            <div className="flex flex-col">
              <div className="w-full bg-gray-800 px-4 pt-8 pb-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-96 object-contain rounded-xl"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm lg:text-base">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-300 text-sm sm:text-base px-4 py-2 rounded-xl text-center font-semibold"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base px-4 py-2 rounded-xl text-center font-semibold"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
