import Navbar from './components/Navbar';
import Preloader from "./components/Preloader";
import Hero from "./components/hero";
import About from "./components/about";
import Technologies from "./components/technologies";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Sphere3d from "./components/sphere3d";

import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sphereContainerRef = useRef(null);

  // Function to update state when Preloader finishes
  const handlePreloaderFinish = () => {
    setIsLoading(false);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Ensures Hero is the first page seen
  };

  // Prevent scrolling while Preloader is active
  useEffect(() => {
    if (isLoading) {
      document.documentElement.style.overflow = "hidden"; // 🔒 Locks scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto"; // 🔓 Restores scrolling
      document.body.style.overflow = "auto";
    }

    return () => {
      // Cleanup in case component unmounts
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  // Initialize Sphere3d AFTER preloader finishes
  useEffect(() => {
    if (!isLoading && sphereContainerRef.current) {
      new Sphere3d({ dom: sphereContainerRef.current });
    }
  }, [isLoading]); // Runs when isLoading changes

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Preloader */}
      <div className={`fixed inset-0 transition-all duration-500 ${isLoading ? "z-loader" : "z-background"}`}>
        {isLoading && <Preloader onFinish={handlePreloaderFinish} />}
      </div>

      {/* Main Content */}
      <main className="relative">
        <Navbar />
        <Hero preloaderFinished={!isLoading} />
        <About />
        <Technologies />
        <Experiences />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
