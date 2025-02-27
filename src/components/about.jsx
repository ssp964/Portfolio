import React, { useRef } from "react";
import profile_pic_1 from "../assets/profile_pic_1.jpg";
import profile_pic_2 from "../assets/profile_pic_3.jpg";

const About = () => {
    const textRef = useRef(null);

    return (
        <div id="about" className="bg-white text-black min-h-screen flex flex-col">
            {/* About Section */}
            <section className="flex flex-col justify-center items-center text-center max-w-7xl min-h-screen mx-auto px-4">
                <h2 className="text-sm md:text-lg lg:text-xl font-[Montserrat] uppercase tracking-widest opacity-70 mb-10">
                    {`{ About }`}
                </h2>

                <div className="flex flex-col items-center">
                    <p ref={textRef} className="text-4xl md:text-4xl lg:text-6xl font-bold font-[Roboto] leading-tight">
                        I pair strong <span className="italic">visual design</span> skills <br />
                        with a focus on <span className="italic">user-centered design.</span>
                    </p>
                    <p className="text-gray-400 text-xs md:text-lg mt-10 lg:mt-10 font-[Roboto] md:max-w-sm lg:max-w-2xl tracking-wide">
                        With 3+ years of experience in data science, I have been helping businesses
                        optimize decision-making through advanced analytics and cloud computing.
                    </p>
                </div>
            </section>

            {/* Profile Section */}
            <section className="relative w-full max-w-7xl mx-auto min-h-screen  px-6 md:px-16 bg-white text-black flex flex-col">

                {/* Desktop Images (Hidden on small screens) */}
                <div className="hidden lg:block absolute top-0 right-0 w-full h-full">
                    {/* Top Image - Right Aligned */}
                    <img
                        src={profile_pic_1}
                        alt="Profile 1"
                        className="w-[360px] h-[480px] object-cover rounded-sm grayscale absolute right-0 top-[50px]"
                    />
                    {/* Bottom Image - Left Aligned & Smaller */}
                    <img
                        src={profile_pic_2}
                        alt="Profile 2"
                        className="w-[235px] h-[168px] object-contain rounded-sm grayscale absolute right-[380px] top-[540px]"
                    />
                </div>

                {/* Profile Heading */}
                <h2 className="text-sm md:text-lg lg:text-xl font-[Montserrat] uppercase tracking-widest opacity-70 md:mt-24 lg:mt-24 mb-10 w-full text-center lg:text-left">
                    {`{ Profile }`}
                </h2>

                {/* Content Container (Text Only) */}
                <div className="w-full lg:w-3/4 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <p className="text-2xl md:text-4xl lg:text-5xl font-semibold font-[Roboto] leading-tight">
                        Currently pursuing a Master's <br />
                        in Computer Science, specializing <br />
                        in <span className="italic">Machine Learning & AI.</span>
                    </p>
                    <p className="text-gray-400 text-xs md:text-lg my-6 lg:mt-6 font-[Roboto] tracking-wide md:max-w-xl">
                        I develop AI-driven solutions that scale, optimize processes, and drive innovation.
                        My expertise spans predictive modeling, data engineering, and cloud-based systems.
                    </p>
                </div>

                {/* Mobile Images (Visible on small and medium screens) */}
                <div className="flex flex-col items-center gap-6 lg:hidden my-6 mb-12">
                    <img
                        src={profile_pic_1}
                        alt="Profile 1"
                        className="w-[280px] h-[360px] object-cover rounded-sm grayscale"
                    />
                    <img
                        src={profile_pic_2}
                        alt="Profile 2"
                        className="w-[280px] h-[200px] object-contain rounded-sm grayscale"
                    />
                </div>

            </section>
        </div>
    );
};

export default About;
