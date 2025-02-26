import { useEffect, useRef } from "react";
import gsap from "gsap";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const techIcons = [
    { icon: <SiMongodb className="text-7xl text-green-500" />, id: "mongo" },
    { icon: <DiRedis className="text-7xl text-red-500" />, id: "redis" },
    { icon: <FaNodeJs className="text-7xl text-green-400" />, id: "node" },
    { icon: <BiLogoPostgresql className="text-7xl text-blue-500" />, id: "postgres" },
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, id: "react" },
    { icon: <TbBrandNextjs className="text-7xl text-white" />, id: "next" },
];

const Technologies = () => {
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    useEffect(() => {
        // **GSAP Infinite Scrolling Effect**
        const loopIcons = (target, direction) => {
            gsap.to(target, {
                xPercent: direction === "left" ? -100 : 100, // Moves full width
                duration: 10,
                repeat: -1,
                ease: "linear",
                modifiers: {
                    xPercent: gsap.utils.wrap([-100, 0]), // Ensures smooth looping
                },
            });
        };

        loopIcons(row1Ref.current, "left");
        loopIcons(row2Ref.current, "right");

        // **Bouncing effect for alternate icons**
        gsap.to(".bounce", {
            y: -10,
            duration: 1.5,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
        });

        // **Speed Boost on Scroll (Doesn't Reset)**
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const deltaY = window.scrollY - lastScrollY;
            lastScrollY = window.scrollY;

            gsap.to([row1Ref.current, row2Ref.current], {
                duration: 0.2,
                ease: "none",
                xPercent: `-=${deltaY * 0.3}`, // Small speed boost
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="tech" className="w-full bg-black py-12 overflow-hidden relative">
            <h1 className="text-white text-center text-4xl my-4">Technologies</h1>

            <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center justify-center px-4 md:px-8 overflow-hidden">
                {/* First Row - Scrolls Left (Smoothly Loops) */}
                <div ref={row1Ref} className="flex items-center gap-10 whitespace-nowrap w-[200%]">
                    {techIcons.map((tech, index) => (
                        <div
                            key={`row1-${index}`}
                            className={`tech-icon rounded-2xl border-4 border-neutral-800 p-6 ${index % 2 === 0 ? "bounce" : ""
                                }`}
                        >
                            {tech.icon}
                        </div>
                    ))}
                    {/* Duplicate for seamless looping */}
                    {techIcons.map((tech, index) => (
                        <div
                            key={`row1-duplicate-${index}`}
                            className={`tech-icon rounded-2xl border-4 border-neutral-800 p-6 ${index % 2 === 0 ? "bounce" : ""
                                }`}
                        >
                            {tech.icon}
                        </div>
                    ))}
                </div>

                {/* Second Row - Scrolls Right (Smoothly Loops) */}
                <div ref={row2Ref} className="flex items-center gap-10 whitespace-nowrap w-[200%]">
                    {techIcons.map((tech, index) => (
                        <div
                            key={`row2-${index}`}
                            className={`tech-icon rounded-2xl border-4 border-neutral-800 p-6 ${index % 2 !== 0 ? "bounce" : ""
                                }`}
                        >
                            {tech.icon}
                        </div>
                    ))}
                    {/* Duplicate for seamless looping */}
                    {techIcons.map((tech, index) => (
                        <div
                            key={`row2-duplicate-${index}`}
                            className={`tech-icon rounded-2xl border-4 border-neutral-800 p-6 ${index % 2 !== 0 ? "bounce" : ""
                                }`}
                        >
                            {tech.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;


// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
// import { BiLogoPostgresql } from "react-icons/bi";

// const techIcons = [
//     { icon: <SiMongodb className="text-7xl text-green-500" />, id: "mongo" },
//     { icon: <DiRedis className="text-7xl text-red-500" />, id: "redis" },
//     { icon: <FaNodeJs className="text-7xl text-green-400" />, id: "node" },
//     { icon: <BiLogoPostgresql className="text-7xl text-blue-500" />, id: "postgres" },
//     { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, id: "react" },
//     { icon: <TbBrandNextjs className="text-7xl text-white" />, id: "next" },
// ];

// const Technologies = () => {
//     const row1Ref = useRef(null);
//     const row2Ref = useRef(null);

//     useEffect(() => {
//         const loopIcons = (target, direction) => {
//             gsap.to(target, {
//                 x: direction === "left" ? "-100%" : "100%",
//                 duration: 10,
//                 repeat: -1,
//                 ease: "linear",
//                 onRepeat: () => {
//                     gsap.set(target, { x: "0%" });
//                 }
//             });
//         };

//         loopIcons(row1Ref.current, "left");
//         loopIcons(row2Ref.current, "right");
//     }, []);

//     return (
//         <div id="tech" className="w-full bg-black py-12 overflow-hidden relative">
//             <h1 className="text-white text-center text-4xl my-4">Technologies</h1>

//             <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center justify-center px-4 md:px-8 overflow-hidden">
//                 {/* First Row - Scrolls Left (Smoothly Loops) */}
//                 <div ref={row1Ref} className="flex items-center gap-10 whitespace-nowrap w-max">
//                     {[...techIcons, ...techIcons].map((tech, index) => (
//                         <div
//                             key={`row1-${index}`}
//                             className="tech-icon rounded-2xl border-4 border-neutral-800 p-6"
//                         >
//                             {tech.icon}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Second Row - Scrolls Right (Smoothly Loops) */}
//                 <div ref={row2Ref} className="flex items-center gap-10 whitespace-nowrap w-max">
//                     {[...techIcons, ...techIcons].map((tech, index) => (
//                         <div
//                             key={`row2-${index}`}
//                             className="tech-icon rounded-2xl border-4 border-neutral-800 p-6"
//                         >
//                             {tech.icon}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Technologies;
