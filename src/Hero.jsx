import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ParticlesBackground from "./ParticlesBackground";
import TypingEffect from "react-typing-effect";

const Hero = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800"
      }`}
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* First Row: Left (Text) - Right (Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Left Column (Text) */}
          <div className="space-y-6">
          <h1
              className="text-5xl font-bold"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <TypingEffect
                text={["Hi, I'm Rohann Keerthy"]} // Text to be typed
                speed={100} // Speed of typing in ms
                eraseDelay={500} // Delay before erasing
                typingDelay={500} // Delay before starting typing
                cursorColor="black" // Cursor color
              />
            </h1>
            <p className="text-lg" data-aos="fade-right" data-aos-delay="400">
              Driven Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, dedicated to designing innovative, scalable solutions that enhance user experiences and optimize system performance.
            </p>
            <p className="text-base" data-aos="fade-right" data-aos-delay="600">
              A passionate and proactive Bachelor of Engineering student at Mahatma Gandhi Institute of Technology, pursuing a degree in Computer Science and Engineering with a focus on AI and ML (CGPA: 8.0). With hands-on experience as a Backend Developer Intern at Ezynest LLC, excelling in building RESTful APIs using Spring Boot and optimizing PostgreSQL database schemas for high-traffic applications.
            </p>
          </div>

          {/* Right Column (Animated Illustration) */}
          <div className="flex justify-center" data-aos="fade-left" data-aos-delay="800">
            <img
              src="/images/home-main.svg" // Replace with your animated SVG
              alt="Hero Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Second Row: Left (Carousel) - Right (Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column (Carousel) */}
          <div className="flex justify-center" data-aos="fade-right" data-aos-delay="1000">
            <Slider {...settings} className="w-full max-w-md">
              <div>
                <img
                  src="/images/project1.png" // Replace with your project screenshot 1
                  alt="Project Screenshot 1"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="/images/project2.png" // Replace with your project screenshot 2
                  alt="Project Screenshot 2"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src="/images/project3.png" // Replace with your project screenshot 3
                  alt="Project Screenshot 3"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </Slider>
          </div>

          {/* Right Column (Text) */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="1200">
            <p className="text-base">
              Developed impactful projects, including a caffeine-tracking platform with React, a real-time age and gender detection system using OpenCV, and a Discord music bot deployed on Raspberry Pi. Proficient in Python, Java, React.js, and cloud technologies like AWS, combining technical expertise with strong problem-solving and teamwork skills.
            </p>
            <p className="text-base">
              A LeetCode enthusiast with over 150 DSA problems solved, a state-level Abacus medalist, and a competitive E-Sports player, bringing a blend of analytical rigor and creative innovation to every challenge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;