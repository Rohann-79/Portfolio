import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Projects = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const projects = [
    {
      title: "Nexus AI: An AI Marketplace",
      description: (
        <>
          <p>
            - Developed and deployed Nexus AI, a secure web application enabling users to buy and sell AI models using cryptocurrency, 
            leveraging Firebase for user authentication and ensuring seamless transactions and data privacy.
          </p>
          <p>
            - Integrated blockchain technology for secure, transparent transactions and implemented Firebase for real-time user management, 
            optimizing performance and enhancing user experience within a decentralized marketplace.
          </p>
        </>
      ),
      githubLink: "https://github.com/Rohann-79/AI-Market-Place",
      liveDemo: "https://ai-market-place-khaki.vercel.app/",
    },
    {
      title: "HealthForge: AI-Powered Health Tips Platform",
      description: (
        <>
          <p>
            - Developed and deployed HealthForge, a Next.js web application built with TypeScript, offering personalized health tips and fitness recommendations powered by machine learning models.
          </p>
          <p>
            - Utilized Firebase for real-time user management and authentication, ensuring seamless user interactions and data privacy. 
            Integrated Python-based backend for handling data processing and model training to provide personalized recommendations for health improvement.
          </p>
        </>
      ),
      githubLink: "https://github.com/Rohann-79/Healthforge",
    },
    {
      title: "SipSense: Caffeine tracking in Coffee using React ",
      description: (
        <>
          <p>
            - Launched a data-driven platform for caffeine monitoring via React, which aggregates user data to provide health
            insights; achieved a response time of under 2 seconds for user queries, enhancing overall user experience.
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
            - Developed a real-time age and gender detection system using DNN and Caffe models, ensuring precise predictions
            from video feeds while achieving 85% accuracy for immediate analysis during live sessions.
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
    {
      title: "ExpenseGenius: AI based Expense Tracking Web App ",
      description: (
        <>
          <p>
            - Launched a secure, AI-powered expense tracker with JWT authentication, ensuring user data privacy and secure
login, while providing personalized financial insights and saving strategies based on user behavior.
          </p>
          <p>
            - Developed interactive data visualizations using charts to represent spending patterns and savings goals, enhanc-
ing user experience and decision-making through actionable, data-driven financial reports.
          </p>
        </>
      ),
      githubLink: "https://github.com/Rohann-79/finance-tracker",
      liveDemo: "https://finance-tracker-jet-eight.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
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
          Projects
        </h2>
        <p
          className={`text-center mb-12 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
          data-aos="fade-up"
        >
          Some things I've built
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                isDarkMode ? "bg-[#1a1a2e]/50" : "bg-white/50"
              } backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="flex items-center space-x-2 mb-4">
                <FaCode className={`text-xl ${
                  isDarkMode ? "text-purple-400" : "text-blue-600"
                }`} />
                <h3 className={`text-xl font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                  {project.title}
                </h3>
              </div>

              <div className={`space-y-2 mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                {project.description}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-[#2a2a3e] text-white hover:bg-[#3a3a4e]"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  } transition-colors duration-300`}
                >
                  <FaGithub />
                  <span>Code</span>
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                      isDarkMode
                        ? "bg-[#2a2a3e] text-white hover:bg-[#3a3a4e]"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    } transition-colors duration-300`}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
