import React from "react";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-gray-800">
        <h1 className="text-6xl font-bold" data-aos="zoom-in">
          Rohann Keerthy
        </h1>
        <div className="text-center mx-auto max-w-3xl">
            <p className="mt-4 text-xl" data-aos="fade-up" data-aos-delay="200">
                Driven Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, 
                dedicated to designing innovative, scalable solutions that enhance user experiences and optimize system performance.
            </p>

            <p className="mt-2 text-lg" data-aos="fade-up" data-aos-delay="400">
                A passionate and proactive Bachelor of Engineering student at Mahatma Gandhi Institute of Technology, 
                pursuing a degree in Computer Science and Engineering with a focus on AI and ML (CGPA: 8.0). 
                With hands-on experience as a Backend Developer Intern at Ezynest LLC, excelling in building RESTful APIs using Spring Boot 
                and optimizing PostgreSQL database schemas for high-traffic applications.
            </p>

            <p className="mt-2 text-lg" data-aos="fade-up" data-aos-delay="600">
                Developed impactful projects, including a caffeine-tracking platform with React, a real-time age and gender 
                detection system using OpenCV, and a Discord music bot deployed on Raspberry Pi. 
                Proficient in Python, Java, React.js, and cloud technologies like AWS, combining technical expertise with strong problem-solving 
                and teamwork skills.
            </p>

            <p className="mt-2 text-lg" data-aos="fade-up" data-aos-delay="800">
                A LeetCode enthusiast with over 150 DSA problems solved, a state-level Abacus medalist, and a competitive Rocket League player, 
                bringing a blend of analytical rigor and creative innovation to every challenge.
            </p>
        </div>


      </section>
    );
  };

export default Hero;