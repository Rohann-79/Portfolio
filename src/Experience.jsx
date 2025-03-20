import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Freelancer",
      duration: "May 2024 - August 2024",
      description: "Led development of multiple full-stack applications using React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    },
    
    {
      role: "Backend Developer Intern",
      company: "Ezynest LLC",
      duration: "August 2024 - January 2025",
      description: "Engineered and maintained scalable RESTful APIs using Spring Boot, improving frontend functionality and optimizing user experience through efficient data handling, reducing response time by 30%.",
      technologies: ["Java", "Spring Boot", "Git", "PostgreSQL"],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 ${
        isDarkMode
          ? "bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]"
          : "bg-gradient-to-r from-blue-50 to-purple-50"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-4 ${
            isDarkMode ? "text-white" : "text-gray-800"
          } code-text`}
          data-aos="fade-right"
        >
          Experience
        </h2>
        <p
          className={`text-center mb-12 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
          data-aos="fade-up"
        >
          My professional journey
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 ${
            isDarkMode ? "bg-purple-500/30" : "bg-blue-500/30"
          }`} />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 200}
              >
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                  isDarkMode ? "bg-purple-500" : "bg-blue-500"
                }`} />

                {/* Content */}
                <div className={`w-5/12 p-6 rounded-lg ${
                  isDarkMode ? "bg-[#1a1a2e]/50" : "bg-white/50"
                } backdrop-blur-sm shadow-lg`}>
                  <div className="flex items-center space-x-2 mb-4">
                    <FaBriefcase className={`${
                      isDarkMode ? "text-purple-400" : "text-blue-600"
                    }`} />
                    <h3 className={`text-xl font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}>
                      {exp.role}
                    </h3>
                  </div>
                  <p className={`text-lg mb-2 ${
                    isDarkMode ? "text-purple-400" : "text-blue-600"
                  }`}>
                    {exp.company}
                  </p>
                  <p className={`text-sm mb-4 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {exp.duration}
                  </p>
                  <p className={`mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}>
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-blue-500/20 text-blue-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
