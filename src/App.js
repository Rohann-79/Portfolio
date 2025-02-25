import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Experience from "./Experience"; 
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import ResumeSection from "./ResumeSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { DarkModeProvider } from "./DarkModeContext"; // Import DarkModeProvider

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <DarkModeProvider> {/* Wrap the entire app with DarkModeProvider */}
      <div>
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <ResumeSection />
        <Projects />
        <Contact />
      </div>
    </DarkModeProvider>
  );
}

export default App;