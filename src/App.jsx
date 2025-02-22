import Navbar from './components/Navbar';
import Preloader from "./components/Preloader";
import React, { useState } from "react";



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    //text higlight
    <div className="overflow-x-hidden text-white antialiased selection:bg-white selection:text-black">
      <div className="preloader">
        <Preloader />
      </div>

      {/* Background Gradient */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-35%,rgba(255,255,255,0.3),rgba(0,0,0,1))]"></div>
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-8'>
        <Navbar />
      </div>
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-gray-200 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,.3))]"></div> */}
    </div >
  );
};

export default App;