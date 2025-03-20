import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { DarkModeContext } from "./DarkModeContext";

const Contact = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section
      id="contact"
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
          Contact
        </h2>
        <p
          className={`text-center mb-12 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
          data-aos="fade-up"
        >
          Get in touch with me
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`p-8 rounded-lg ${
              isDarkMode ? "bg-[#1a1a2e]/50" : "bg-white"
            } backdrop-blur-sm`}
            data-aos="fade-right"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-[#2a2a3e] text-white border-gray-700 focus:border-purple-500"
                      : "bg-white text-gray-900 border-gray-300 focus:border-blue-500"
                  } border focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-[#2a2a3e] text-white border-gray-700 focus:border-purple-500"
                      : "bg-white text-gray-900 border-gray-300 focus:border-blue-500"
                  } border focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-[#2a2a3e] text-white border-gray-700 focus:border-purple-500"
                      : "bg-white text-gray-900 border-gray-300 focus:border-blue-500"
                  } border focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg font-medium ${
                  isDarkMode
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                } transition-colors`}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div
            className={`p-8 rounded-lg ${
              isDarkMode ? "bg-[#1a1a2e]/50" : "bg-white"
            } backdrop-blur-sm`}
            data-aos="fade-left"
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Let's Connect
            </h3>
            <p
              className={`mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:rohannkeerthy@gmail.com"
                className={`flex items-center space-x-4 ${
                  isDarkMode ? "text-gray-300 hover:text-purple-400" : "text-gray-600 hover:text-blue-600"
                } transition-colors`}
              >
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-[#2a2a3e]" : "bg-blue-50"
                }`}>
                  <FaEnvelope className={`text-xl ${
                    isDarkMode ? "text-purple-400" : "text-blue-600"
                  }`} />
                </div>
                <span>rohannkeerthy@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/rohann-keerthy-9a9906219/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-4 ${
                  isDarkMode ? "text-gray-300 hover:text-purple-400" : "text-gray-600 hover:text-blue-600"
                } transition-colors`}
              >
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-[#2a2a3e]" : "bg-blue-50"
                }`}>
                  <FaLinkedin className={`text-xl ${
                    isDarkMode ? "text-purple-400" : "text-blue-600"
                  }`} />
                </div>
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://x.com/Rohann80172064"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-4 ${
                  isDarkMode ? "text-gray-300 hover:text-purple-400" : "text-gray-600 hover:text-blue-600"
                } transition-colors`}
              >
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-[#2a2a3e]" : "bg-blue-50"
                }`}>
                  <FaTwitter className={`text-xl ${
                    isDarkMode ? "text-purple-400" : "text-blue-600"
                  }`} />
                </div>
                <span>Twitter Profile</span>
              </a>

              <a
                href="https://github.com/Rohann-79"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-4 ${
                  isDarkMode ? "text-gray-300 hover:text-purple-400" : "text-gray-600 hover:text-blue-600"
                } transition-colors`}
              >
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-[#2a2a3e]" : "bg-blue-50"
                }`}>
                  <FaGithub className={`text-xl ${
                    isDarkMode ? "text-purple-400" : "text-blue-600"
                  }`} />
                </div>
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;