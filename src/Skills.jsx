import React, { useContext } from "react";
import { FaReact, FaPython, FaJava, FaAws } from "react-icons/fa";
import { SiSpringboot, SiJenkins, SiPostgresql, SiOpencv, SiTensorflow, SiGit, SiC } from "react-icons/si";
import { DarkModeContext } from "./DarkModeContext";

const Skills = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", icon: <FaPython className="text-4xl text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-4xl text-red-500" /> },
        { name: "C Programming", icon: <SiC className="text-3xl text-blue-600" /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", icon: <FaReact className="text-4xl text-blue-400" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-4xl text-green-500" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-4xl text-orange-600" /> },
        { name: "Git", icon: <SiGit className="text-4xl text-red-600" /> },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "AWS", icon: <FaAws className="text-4xl text-orange-500" /> },
        { name: "Jenkins", icon: <SiJenkins className="text-4xl text-black-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-600" /> },
        { name: "OpenCV", icon: <SiOpencv className="text-4xl text-green-600" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-down">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${
                isDarkMode ? "bg-gray-800 text-gray-100" : "bg-gray-50 text-gray-800"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className="text-2xl font-semibold mb-4">{skill.category}</h3>
              <div className="space-y-4">
                {skill.items.map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    {item.icon}
                    <span className="text-lg">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;