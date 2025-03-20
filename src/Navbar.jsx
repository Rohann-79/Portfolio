import React, { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? "bg-[#0a0a1a]/90 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={handleRefresh}
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              } code-text hover:rotate-180 transition-transform duration-500`}
            >
              &lt;/&gt;
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
            >
              Projects
            </a>
            <a
              href="#experience"
              className={`${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
            >
              Experience
            </a>
            <a
              href="#resume"
              className={`${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
            >
              Resume
            </a>
            <a
              href="#contact"
              className={`${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
            >
              Contact
            </a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "bg-[#1a1a2e] text-yellow-400 hover:bg-[#2a2a3e]"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } transition-all duration-300 hover:scale-110 hover:rotate-12`}
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                isDarkMode
                  ? "bg-[#1a1a2e] text-white hover:bg-[#2a2a3e]"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } transition-all duration-300 hover:scale-110`}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div
            className={`py-4 space-y-4 ${
              isDarkMode ? "bg-[#0a0a1a]" : "bg-white"
            } rounded-lg mt-2 shadow-lg`}
          >
            <a
              href="#about"
              className={`block px-4 py-2 ${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className={`block px-4 py-2 ${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`block px-4 py-2 ${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#experience"
              className={`block px-4 py-2 ${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
              onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
            <a
              href="#resume"
              className={`block px-4 py-2 ${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
            <a
              href="#contact"
              className={`block px-4 py-2 ${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button
              onClick={toggleDarkMode}
              className={`w-full px-4 py-2 text-left ${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
              } transition-colors duration-300 hover:scale-105`}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;