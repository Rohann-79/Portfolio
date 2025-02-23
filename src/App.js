import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import ResumeSection from "./ResumeSection";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <ResumeSection />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;