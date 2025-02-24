import React, { useEffect, useState, useContext } from "react";
import { FaHome, FaProjectDiagram, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { DarkModeContext } from "./DarkModeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } bg-opacity-90 backdrop-blur-md z-50 transition-all duration-300 ${
        isScrolled ? "opacity-75" : "opacity-100"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ul className="flex space-x-8">
          <li>
            <a
              href="#hero"
              className={`${
                isDarkMode ? "text-white" : "text-gray-800"
              } hover:text-blue-400 transition duration-300 flex items-center space-x-2`}
            >
              <FaHome className="text-xl" />
              <span className="text-lg font-medium">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`${
                isDarkMode ? "text-white" : "text-gray-800"
              } hover:text-blue-400 transition duration-300 flex items-center space-x-2`}
            >
              <FaProjectDiagram className="text-xl" />
              <span className="text-lg font-medium">Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${
                isDarkMode ? "text-white" : "text-gray-800"
              } hover:text-blue-400 transition duration-300 flex items-center space-x-2`}
            >
              <FaEnvelope className="text-xl" />
              <span className="text-lg font-medium">Contact</span>
            </a>
          </li>
        </ul>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-500 text-xl" />
          ) : (
            <FaMoon className="text-gray-800 text-xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;