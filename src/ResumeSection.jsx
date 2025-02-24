import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

const ResumeSection = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section
      id="resume"
      className={`py-20 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10" data-aos="flip-left">
          My Resume
        </h2>
        <div className="text-center" data-aos="slide-up">
          <a
            href="https://drive.google.com/file/d/1W8OSY8VZLXHAfQlx3tAMJDvXJgccrtt0/view"
            download
            className={`${
              isDarkMode
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white py-3 px-6 rounded-lg transition duration-300`}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;