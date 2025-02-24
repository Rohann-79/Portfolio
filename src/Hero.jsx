import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

const Hero = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* First Row: Left (Text) - Right (Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Left Column (Text) */}
          <div className="space-y-6">
            <h1
              className="text-6xl font-bold"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Rohann Keerthy
            </h1>
            <p className="text-xl" data-aos="fade-right" data-aos-delay="400">
              Driven Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, dedicated to designing innovative, scalable solutions that enhance user experiences and optimize system performance.
            </p>
            <p className="text-lg" data-aos="fade-right" data-aos-delay="600">
              A passionate and proactive Bachelor of Engineering student at Mahatma Gandhi Institute of Technology, pursuing a degree in Computer Science and Engineering with a focus on AI and ML (CGPA: 8.0). With hands-on experience as a Backend Developer Intern at Ezynest LLC, excelling in building RESTful APIs using Spring Boot and optimizing PostgreSQL database schemas for high-traffic applications.
            </p>
          </div>

          {/* Right Column (Image) */}
          <div className="flex justify-center" data-aos="fade-left" data-aos-delay="800">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.eduonix.com%2Fwp-content%2Fuploads%2F2021%2F05%2FGame-developer-gaming-game-designing-game-development-scaled-e1620913877686.jpg&f=1&nofb=1&ipt=f3d2f1d4f039afc91b57640b3ec91e872f6e405adb2ff58415329406d334967e&ipo=images" // Replace with your image URL
              alt="Hero Image 1"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second Row: Left (Image) - Right (Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column (Image) */}
          <div className="flex justify-center" data-aos="fade-right" data-aos-delay="1000">
            <img
              src="https://assets.grok.com/users/40309a37-071a-4dda-bd4a-2d32aac25718/G4qFjLTuK1OpBTUr-generated_image.jpg" // Replace with your image URL
              alt="Hero Image 2"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column (Text) */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="1200">
            <p className="text-lg">
              Developed impactful projects, including a caffeine-tracking platform with React, a real-time age and gender detection system using OpenCV, and a Discord music bot deployed on Raspberry Pi. Proficient in Python, Java, React.js, and cloud technologies like AWS, combining technical expertise with strong problem-solving and teamwork skills.
            </p>
            <p className="text-lg">
              A LeetCode enthusiast with over 150 DSA problems solved, a state-level Abacus medalist, and a competitive E-Sports player, bringing a blend of analytical rigor and creative innovation to every challenge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;