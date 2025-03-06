import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import project1Img from "../assets/projects/Agrinet.jpeg";
import rlp from "../assets/projects/rocket.jpeg";
import TextSn from "../assets/projects/text_summary.jpeg";
import SalesDash from "../assets/projects/SalesDash.png";
import HrDash from "../assets/projects/HrDash.png";
gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        name: "AgriNet",
        image: project1Img,
        github: "https://github.com/ssp964/AgriNet",
    },
    {
        id: 2,
        name: "Rocket Landing Prediction",
        image: rlp,
        github: "https://github.com/ssp964/rocket-landing-prediction",
    },

    {
        id: 3,
        name: "Text Summarization",
        image: TextSn,
        github: "https://github.com/ssp964/Text_summarization",
    },

    {
        id: 4,
        name: "Sales Dashboard",
        image: SalesDash,
        github: "https://public.tableau.com/views/SalesAndCustomerAnalyticsDashboard/SalesDashboard?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },

    {
        id: 5,
        name: "HR Dashboard",
        image: HrDash,
        github: "https://public.tableau.com/views/HumanResourcesDashboard_17385784789130/HRSummary?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },

];

const Projects = () => {
    const projectRefs = useRef([]);
    const parallaxRefs = useRef([]);

    useEffect(() => {
        projectRefs.current.forEach((ref, index) => {
            if (ref) {
                gsap.fromTo(
                    ref,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ref,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        });

        // Parallax Effect on Images
        parallaxRefs.current.forEach((ref) => {
            gsap.to(ref.querySelector(".bg-overlay"), {
                y: "150px",
                ease: "none",
                scrollTrigger: {
                    trigger: ref,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                },
            });
        });

        ScrollTrigger.refresh();
        window.addEventListener("resize", () => ScrollTrigger.refresh());

        return () => {
            window.removeEventListener("resize", () => ScrollTrigger.refresh());
        };
    }, []);

    return (
        <div id="projects" className="w-full min-h-screen bg-black py-20 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-sm md:text-lg lg:text-xl font-[Montserrat] text-center uppercase tracking-widest opacity-70 mb-16">
                    {`{ Featured Projects }`}
                </h2>

                <div className="flex flex-col gap-24">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={(el) => (projectRefs.current[index] = el)}
                            className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Project Image - Parallax Container */}
                            <div
                                ref={(el) => (parallaxRefs.current[index] = el)}
                                className="relative w-full md:w-[500px] h-[350px] overflow-hidden bg-black"
                            >
                                <div
                                    className="absolute bg-overlay"
                                    style={{
                                        top: "-25%",  // Moves background less aggressively
                                        left: "0",
                                        width: "100%",
                                        height: "150%",  // ✅ Reduced height to avoid overflow
                                        backgroundImage: `url(${project.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        willChange: "transform",
                                    }}
                                ></div>

                            </div>

                            {/* Project Details */}
                            <div className="text-center md:text-left">
                                <h3 className="text-3xl font-semibold">{project.name}</h3>
                                <div className="flex justify-center md:justify-start gap-4 mt-3 text-3xl text-gray-300">
                                    {project.techStack}
                                </div>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-block bg-white text-black py-2 px-6 rounded-md shadow-md hover:bg-gray-300 transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
