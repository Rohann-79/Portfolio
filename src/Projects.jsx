import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

const Projects = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const projects = [
    {
      title: "SipSense: Caffeine tracking in Coffee using React ",
      description: (
        <>
          <p>
            - Engineered a React-based platform for tracking caffeine intake,
            offering users insights on caffeine levels, time since their last
            coffee, and potential health impacts.
          </p>
          <p>
            - Implemented JWT authentication for secure sign-in and sign-out,
            ensuring a personalized and protected user experience.
          </p>
        </>
      ),
      githubLink: "https://github.com/Rohann-79/Coffee-Tracker",
      liveDemo: "https://coffee-tracker-zeta.vercel.app/",
    },
    {
      title: "Real Time Age and Gender Detection using OpenCV",
      description: (
        <>
          <p>
            - Engineered a real-time age and gender detection system using DNN
            and Caffe models, achieving accurate predictions from video feeds.
          </p>
          <p>
            - Implemented the solution on the web using the Flask framework,
            providing an interactive and responsive user interface for seamless
            integration.
          </p>
        </>
      ),
      githubLink: "http://github.com/Rohann-79/Age-and-Gender-Detection-using-OpenCV",
      liveDemo: "https://age-and-gender-detection-using-open-cv-two.vercel.app/",
    },
    {
      title: "Amplifier: Discord Bot for Music",
      description: (
        <>
          <p>
            - Designed and developed a music bot for Discord using Python,
            Discord API, and YTDLP, implementing 7 commands for song search,
            play via URL, skip, stop, pause, and more.
          </p>
          <p>
            - Deployed the bot on a Raspberry Pi for full-time, continuous
            operation, serving 100+ Discord servers and ensuring reliable 24/7
            availability for users.
          </p>
        </>
      ),
      githubLink: "https://github.com/Rohann-79/Discord-Player-Bot",
      liveDemo: "https://discord.com/oauth2/authorize?client_id=1334784399111360512&permissions=1729521119656256&integration_type=0&scope=bot",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${
        isDarkMode
          ? "bg-gradient-to-r from-gray-900 to-gray-800"
          : "bg-gradient-to-r from-blue-50 to-purple-50"
      }`}
    >
      <h2
        className={`text-4xl font-bold text-center mb-10 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
        data-aos="fade-right"
      >
        Projects
      </h2>
      <div className="container mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`mb-8 p-6 rounded-lg ${
              isDarkMode ? "bg-gray-700" : "bg-white"
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h3
              className={`text-2xl font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {project.title}
            </h3>
            <div
              className={`mt-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {project.description}
            </div>
            <div className="mt-4">
              <a
                href={project.githubLink}
                className={`mr-4 ${
                  isDarkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-500 hover:text-blue-600"
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.liveDemo}
                className={`${
                  isDarkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-500 hover:text-blue-600"
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;