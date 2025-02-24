import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ABOUT_TEXT } from "../constants";
import profilePic from "../assets/kevinRushProfile.jpg"; // ✅ Correct path

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const imageRefs = useRef([]);

    useEffect(() => {
        imageRefs.current.forEach((ref) => {
            if (ref) {
                gsap.to(ref.querySelector(".bg-overlay"), {
                    y: "100px", // ✅ Increased effect to make scrolling more visible
                    ease: "none",
                    scrollTrigger: {
                        trigger: ref,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2, // ✅ More smooth and noticeable scrolling effect
                    },
                });
            }
        });

        // ✅ Ensure GSAP detects iPhone scroll
        ScrollTrigger.refresh();
        window.addEventListener("resize", () => ScrollTrigger.refresh());

        return () => {
            window.removeEventListener("resize", () => ScrollTrigger.refresh());
        };
    }, []);

    return (
        <div id="about" className="w-full min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl text-center font-bold text-black my-1 mb-12">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Profile Picture - Fixed Container, Moving Background */}
                    <div className="w-full md:w-[400px] h-[400px] overflow-hidden relative flex items-center">
                        <div
                            ref={(el) => (imageRefs.current[0] = el)}
                            className="relative w-full md:w-[600px] h-[600px] bg-black p-8 shadow-lg will-change-transform overflow-visible"
                        >
                            {/* Background Pseudo-Element */}
                            <div
                                className="absolute bg-overlay"
                                style={{
                                    top: "5%", // ✅ Moves it upwards so it's not clipped
                                    left: "0",
                                    width: "100%",
                                    height: "80%", // ✅ Extends beyond the parent to allow full scroll
                                    backgroundImage: `url(${profilePic})`, // ✅ Corrected template literal syntax
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    willChange: "transform",
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-2/3">
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
