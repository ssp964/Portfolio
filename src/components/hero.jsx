import { useEffect, useRef, useState } from "react";
import Sphere3d from "./sphere3d";
import gsap from "gsap";

const Hero = ({ preloaderFinished }) => {
    const sphereContainerRef = useRef(null);
    const [sphereLoaded, setSphereLoaded] = useState(false);
    const textRef = useRef(null);
    const words = ["Data", "Insights", "Innovation", "Impact"];

    useEffect(() => {
        if (preloaderFinished && sphereContainerRef.current) {
            try {
                const sphere = new Sphere3d({ dom: sphereContainerRef.current });

                // 🎯 Delay Sphere visibility until it's ready
                setTimeout(() => {
                    setSphereLoaded(true);
                }, 100); // Adjust delay as needed

            } catch (error) {
                console.error("Sphere3D failed to load:", error);
            }
        }
    }, [preloaderFinished]);

    useEffect(() => {
        if (preloaderFinished) {
            const tl = gsap.timeline();

            tl.delay(0.4);

            words.forEach((word, i) => {
                tl.to(textRef.current, {
                    opacity: 1, duration: 0.2, ease: "power4.out",
                    onStart: () => { textRef.current.innerHTML = word; }
                });

                tl.to(textRef.current, { opacity: 0, duration: 0.2, ease: "power4.inOut", delay: 0.2 });
            });

            // 🎯 After last word, transition smoothly to final text
            tl.to(textRef.current, {
                opacity: 1,
                duration: 1,
                ease: "power3.inOut",
                onStart: () => { textRef.current.innerHTML = "I am a Data Scientist"; }
            });
        }
    }, [preloaderFinished]);

    return (
        <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">

            {/* Sphere3D Background - Hidden until loaded */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${sphereLoaded ? "opacity-100" : "opacity-0"}`}>
                <div ref={sphereContainerRef} className="w-full h-full"></div>
            </div>

            {/* Hero Content */}
            <div className="relative h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="text-center bg-transparent rounded-lg p-8">
                    <h1 ref={textRef} className="text-white text-3xl md:text-5xl font-[Montserrat] tracking-wide opacity-0">
                        {words[0]}
                    </h1>
                </div>
            </div>

        </section>
    );
};

export default Hero;
