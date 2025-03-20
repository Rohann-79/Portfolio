import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { FaExternalLinkAlt } from "react-icons/fa";

const ResumeSection = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section
      id="resume"
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
          Resume
        </h2>

        <div
          className={`max-w-2xl mx-auto p-8 rounded-lg ${
            isDarkMode ? "bg-[#1a1a2e]/50" : "bg-white"
          } backdrop-blur-sm`}
          data-aos="fade-up"
        >
          <div className="text-center">
            <p className={`mb-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
              href="https://drive.google.com/file/d/1W8OSY8VZLXHAfQlx3tAMJDvXJgccrtt0/view"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg ${
                isDarkMode
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              } transition-colors`}
            >
              <FaExternalLinkAlt />
              <span>View Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
