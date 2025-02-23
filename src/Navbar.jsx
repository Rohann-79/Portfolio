import React, { useEffect, useState } from "react";
import { FaHome, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
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
        className={`fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 transition-all duration-300 ${
          isScrolled ? "opacity-75" : "opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#hero"
                className="text-white hover:text-blue-400 transition duration-300 flex items-center space-x-2"
              >
                <FaHome className="text-xl" />
                <span className="text-lg font-medium">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-blue-400 transition duration-300 flex items-center space-x-2"
              >
                <FaProjectDiagram className="text-xl" />
                <span className="text-lg font-medium">Projects</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-blue-400 transition duration-300 flex items-center space-x-2"
              >
                <FaEnvelope className="text-xl" />
                <span className="text-lg font-medium">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar;