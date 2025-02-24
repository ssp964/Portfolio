// import React from "react";
// import Navbar from "./components/Navbar";
// import Preloader from "./components/Preloader";
// import Hero from "./components/Hero"; // Optional, if you use it for additional hero content

// const App = () => {
//   return (
//     <div className="relative overflow-x-hidden text-white antialiased selection:bg-white selection:text-black">

//       {/* Background Video */}
//       <video
//         className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
//         src="/videos/your-2160p-video.mp4"  // Place your 2160p video in public/videos folder
//         autoPlay
//         loop
//         muted
//         playsInline
//       />

//       {/* Transparent Navbar overlay */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <Navbar />
//       </div>

//       {/* Preloader overlay if needed */}
//       <div className="fixed inset-0 z-60">
//         <Preloader />
//       </div>

//       {/* Main Content (if any) */}
//       <div className="relative pt-16">
//         {/* Additional content goes here */}
//       </div>
//     </div>
//   );
// };

// export default App;



import Navbar from './components/Navbar';
import Preloader from "./components/Preloader";
import Hero from "./components/hero";
import About from "./components/about";
import Technologies from "./components/technologies";
import Experiences from "./components/experiences";
import React, { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Preloader */}
      <div className={`fixed inset-0 transition-all duration-500 ${isLoading ? "z-loader" : "z-background"}`}>
        {isLoading && <Preloader onFinish={handlePreloaderFinish} />}
      </div>

      {/* Main Content */}
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experiences />
      </main>
    </div>
  );
};

export default App;