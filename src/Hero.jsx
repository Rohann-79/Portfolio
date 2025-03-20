import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import AnimatedBackground from "./AnimatedBackground";
import TypingEffect from "react-typing-effect";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-16 ${
        isDarkMode
          ? "bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a]"
          : "bg-gradient-to-r from-blue-50 to-purple-50"
      }`}
    >
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <h1
              className={`text-6xl font-bold code-text ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <TypingEffect
                text={["Hi, I'm Rohann Keerthy"]}
                speed={100}
                eraseDelay={500}
                typingDelay={500}
                cursorColor={isDarkMode ? "#4a1d96" : "#000000"}
              />
            </h1>

            <p
              className={`text-xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A passionate Full Stack Developer with expertise in AI/ML and Cloud
              technologies. I love building innovative solutions that make a
              difference.
            </p>

            <div
              className="flex justify-center space-x-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="https://github.com/Rohann-79"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full ${
                  isDarkMode
                    ? "bg-[#1a1a2e] text-white hover:bg-[#2a2a3e]"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                } transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg`}
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rohann-keerthy-9a9906219/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full ${
                  isDarkMode
                    ? "bg-[#1a1a2e] text-white hover:bg-[#2a2a3e]"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                } transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg`}
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/Rohann80172064"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full ${
                  isDarkMode
                    ? "bg-[#1a1a2e] text-white hover:bg-[#2a2a3e]"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                } transition-all duration-300 hover:scale-110 hover:rotate-12 shadow-lg`}
              >
                <FaTwitter size={24} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div
                className={`p-6 rounded-lg ${
                  isDarkMode ? "bg-[#1a1a2e]/50" : "bg-white/50"
                } backdrop-blur-sm`}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <p className={`font-mono text-sm ${
                  isDarkMode ? "text-purple-400" : "text-blue-600"
                }`}>
                  <span className="text-gray-500">class</span>{" "}
                  <span className="text-yellow-500">Developer</span> {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-gray-500">constructor</span>() {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.name = "Rohann Keerthy";
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.role = "Full Stack Developer";
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">this</span>.passion = "Building Innovative Solutions";
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  {"}"}
                </p>
              </div>

              <div
                className={`p-6 rounded-lg ${
                  isDarkMode ? "bg-[#1a1a2e]/50" : "bg-white/50"
                } backdrop-blur-sm`}
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <p className={`font-mono text-sm ${
                  isDarkMode ? "text-purple-400" : "text-blue-600"
                }`}>
                  <span className="text-gray-500">const</span>{" "}
                  <span className="text-yellow-500">skills</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;ai: ["Machine Learning", "Deep Learning", "NLP"],
                  <br />
                  &nbsp;&nbsp;fullstack: ["React", "Node.js", "Python"],
                  <br />
                  &nbsp;&nbsp;cloud: ["AWS", "Docker", "Kubernetes"]
                  <br />
                  {"}"}
                </p>
              </div>

              <div
                className={`p-6 rounded-lg ${
                  isDarkMode ? "bg-[#1a1a2e]/50" : "bg-white/50"
                } backdrop-blur-sm`}
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <p className={`font-mono text-sm ${
                  isDarkMode ? "text-purple-400" : "text-blue-600"
                }`}>
                  <span className="text-gray-500">function</span>{" "}
                  <span className="text-yellow-500">getInTouch</span>() {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return</span> (
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm currently looking for new opportunities
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's build something amazing together!
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                  <br />
                  &nbsp;&nbsp;);
                  <br />
                  {"}"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;