import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Import loadSlim

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Load the slim version of tsparticles
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent", // Transparent background
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#ffffff", // White dots
          },
          links: {
            color: "#ffffff", // White connecting lines
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2, // Speed of the particles
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80, // Number of particles
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle", // Dot shape
          },
          size: {
            value: { min: 1, max: 3 }, // Size of the particles
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;