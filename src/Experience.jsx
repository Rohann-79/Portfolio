import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

const Experience = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const experiences = [
    {
      company: "Ezynest LLC",
      role: "Backend Developer Intern",
      duration: "Jun 2023 - Present",
      description: [
        "Engineered and maintained scalable RESTful APIs using Spring Boot, improving frontend functionality and optimizing user experience through efficient data handling, reducing response time by 30%.",
        "Designed and optimized relational database schemas in PostgreSQL, ensuring data integrity, enhancing query performance by 40%, and enabling efficient data retrieval for high-traffic applications.",
      ],
    },
    {
      company: "Freelance",
      role: "Full-Stack Developer",
      duration: "Jan 2022 - May 2022",
      description: [
        "Developed and deployed web applications using React and Node.js.",
        "Implemented user authentication and authorization systems.",
        "Worked closely with clients to deliver customized solutions.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-20 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-down">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h3 className="text-2xl font-semibold">
                {exp.role} - {exp.company}
              </h3>
              <p className={`mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                {exp.duration}
              </p>
              <ul className="mt-4 space-y-2">
                {exp.description.map((point, i) => (
                  <li
                    key={i}
                    className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
