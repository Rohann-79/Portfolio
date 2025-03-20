import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { FaCode, FaServer, FaCloud } from "react-icons/fa";
import { 
  SiPython, 
  SiApache, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb,
  SiNextdotjs, 
  SiPostgresql, 
  SiDocker,
  SiFastapi,
  SiAmazonwebservices,
  SiGit, 
  SiJira, 
} from "react-icons/si";

const Skills = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const skills = [
    {
      category: "Programming Languages",
      icon: <FaCode />,
      items: [
        { name: "Python", icon: <SiPython />, level: 90 },
        { name: "Java", icon: <SiApache />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript />, level: 80 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      icon: <FaServer />,
      items: [
        { name: "React", icon: <SiReact />, level: 85 },
        { name: "Node.js", icon: <SiNodedotjs />, level: 80 },
        { name: "Spring Boot", icon: <SiApache />, level: 80 },
        { name: "FastAPI", icon: <SiFastapi />, level: 80 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 80 },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: <FaCloud />,
      items: [
        { name: "MongoDB", icon: <SiMongodb />, level: 80 },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 85 },
        { name: "Docker", icon: <SiDocker />, level: 70 },
        { name: "AWS", icon: <SiAmazonwebservices />, level: 80 },
        { name: "Git", icon: <SiGit />, level: 85 },
        { name: "Jira", icon: <SiJira />, level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
          Skills
        </h2>
        <p
          className={`text-center mb-12 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
          data-aos="fade-up"
        >
          My technical expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                isDarkMode ? "bg-[#1a1a2e]/50" : "bg-white"
              } backdrop-blur-sm`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-[#2a2a3e]" : "bg-blue-100"
                }`}>
                  <div className={`text-2xl ${
                    isDarkMode ? "text-purple-400" : "text-blue-600"
                  }`}>
                    {category.icon}
                  </div>
                </div>
                <h3
                  className={`text-xl font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className={`text-xl ${
                          isDarkMode ? "text-purple-400" : "text-blue-600"
                        }`}>
                          {skill.icon}
                        </div>
                        <span className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full ${
                      isDarkMode ? "bg-[#2a2a3e]" : "bg-gray-200"
                    }`}>
                      <div
                        className={`h-full rounded-full ${
                          isDarkMode ? "bg-purple-500" : "bg-blue-500"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
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