import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bgImage1 from "../assets/pexels-jplenio-1103970.jpg";
import bgImage2 from "../assets/pexels-steve-13551574.jpg";
import bgImage3 from "../assets/pexels-steve-13551577.jpg";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
    const experienceRefs = useRef([]);
    const parallaxRefs = useRef([]);

    useEffect(() => {
        // Jump-in Effect for Experience Containers
        experienceRefs.current.forEach((ref, index) => {
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

        // Parallax Effect on Background Images
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
        <section id="exp" className="w-full bg-white py-20">
            <h2 className="text-sm md:text-lg lg:text-xl font-[Montserrat] text-center uppercase tracking-widest opacity-70 mb-16">
                {`{ Professional Experience }`}
            </h2>

            {/* Experience Tiles Container */}
            <div className="max-w-8xl mx-auto flex flex-col gap-12 items-center justify-center px-4 md:px-8">
                {[bgImage1, bgImage2, bgImage3].map((image, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            experienceRefs.current[index] = el;
                            parallaxRefs.current[index] = el;
                        }}
                        className="relative w-full md:w-[600px] lg:w-[1200px] h-[750px] md:h-[650px] lg:h-[550px] rounded-[40px] bg-black px-12 shadow-lg will-change-transform overflow-hidden"
                    >
                        {/* Background Pseudo-Element */}
                        <div
                            className="absolute bg-overlay"
                            style={{
                                top: "-50%",
                                left: "0",
                                width: "100%",
                                height: "200%",
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                willChange: "transform",
                            }}
                        ></div>

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/30 rounded-[40px]"></div>

                        {/* Content */}
                        <div className="relative text-white flex flex-col justify-center h-full space-y-2">
                            <div className="flex flex-col mb-20 md:mb-30 lg:mb-30">
                                <h2 className="text-3xl md:text-5xl font-[Roboto] tracking-wide pb-1">
                                    {index === 0 ? "Application Development Analyst" : index === 1 ? "Data Scientist Intern" : "Vice Captain"}
                                </h2>
                                <h3 className="text-lg lg:text-xl font-[Roboto] opacity-90 pt-4 tracking-widest text-gray-300">
                                    {index === 0 ? "Accenture" : index === 1 ? "PMT Machines" : "Team Red Baron @SAE BAJA, India"}
                                </h3>
                                <h3 className="text-sm lg:text-lg font-[Roboto] opacity-80 tracking-widest text-gray-300 mt-1">
                                    {index === 0 ? "Jan 2021 - Jul 2023" : index === 1 ? "June 2022 - Dec 2022" : "Jan 2020 - Jul 2021"}
                                </h3>
                            </div>
                            <div className="space-y-2 font-[Roboto] text-sm md:text-base lg:text-lg tracking-tight opacity-85 lg:mr-52">
                                {index === 0 && (
                                    <>
                                        <p className="leading-relaxed">
                                            Designed and developed end-to-end data pipelines for on-prem to GCP cloud migration using DBT, BigQuery, and Apache Airflow, reducing processing time and cost by 20%.
                                        </p>
                                        <p className="leading-relaxed">
                                            Automated SAP MM workflows using TOSCA, reducing manual data validation by 60%, while managing SAP MM configurations with Excel & VBA and developing a ServiceNow-integrated ticket tracking dashboard for reporting.
                                        </p>
                                    </>
                                )}
                                {index === 1 && (
                                    <>
                                        <p className="leading-relaxed">
                                            Led backend API development using Node.js and optimized database queries for faster performance.
                                        </p>
                                        <p className="leading-relaxed">
                                            Designed CI/CD pipelines to enhance deployment speed and reliability.
                                        </p>
                                    </>
                                )}
                                {index === 2 && (
                                    <>
                                        <p className="leading-relaxed">
                                            Spearheaded aerodynamics simulations for the Formula Student racing team.
                                        </p>
                                        <p className="leading-relaxed">
                                            Led a team of engineers in designing a cutting-edge vehicle telemetry system.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
