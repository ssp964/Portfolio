import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
    const experienceRefs = useRef([]);

    useEffect(() => {
        experienceRefs.current.forEach((ref) => {
            gsap.to(ref, {
                backgroundPosition: "center 0%", // Moves background up
                ease: "none",
                scrollTrigger: {
                    trigger: ref,
                    start: "top bottom", // Starts when entering viewport
                    end: "bottom top",   // Ends when leaving viewport
                    scrub: 1, // Smooth and continuous effect
                },
            });
        });
    }, []);

    return (
        <section id="exp" className="w-full bg-white py-20">
            <h1 className="text-black text-center text-4xl mb-16">Professional Experience</h1>

            {/* Experience Tiles Container */}
            <div className="max-w-8xl mx-auto flex flex-col gap-12 items-center justify-center">

                {/* Experience 1 */}
                <div
                    ref={(el) => experienceRefs.current[0] = el}
                    className="relative w-full md:w-3/4 h-[500px] rounded-2xl overflow-hidden bg-white p-8 shadow-lg"
                    style={{
                        backgroundImage: "url('./src/assets/pexels-jplenio-1103970.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center 100%",
                    }}
                >
                    <div className="absolute inset-0 bg-black/30"></div> {/* Dark Overlay */}
                    <div className="relative text-white text-left flex flex-col justify-center h-full space-y-4">
                        <div className="flex flex-col pb-12">
                            <h2 className="text-3xl font-bold">Application Development Analyst</h2>
                            <h3 className="text-2xl font-semibold opacity-90 text-gray-300">Accenture</h3>
                            <h3 className="text-lg font-light opacity-80 mt-2">Jan 2021 - Jul 2023</h3>
                        </div>
                        <div className="mt-6 space-y-3">
                            <p className="leading-relaxed opacity-90">
                                Designed scalable data pipelines, migrating on-prem to GCP using DBT, BigQuery & Apache Airflow.
                            </p>
                            <p className="leading-relaxed opacity-90">
                                Developed interactive analytics dashboards on Tableau, transforming raw data into strategic insights.
                            </p>
                            <p className="leading-relaxed opacity-90">
                                Automated SAP MM workflows using TOSCA, reducing manual validation by 60%.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Experience 2 */}
                <div
                    ref={(el) => experienceRefs.current[1] = el}
                    className="relative w-full md:w-3/4 h-[500px] rounded-2xl overflow-hidden bg-white p-8 shadow-lg"
                    style={{
                        backgroundImage: "url('./src/assets/pexels-steve-13551574.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center 100%",
                    }}
                >
                    <div className="absolute inset-0 bg-black/30"></div> {/* Dark Overlay */}
                    <div className="relative text-white text-left flex flex-col justify-center h-full space-y-4">
                        <div className="flex flex-col pb-12">
                            <h2 className="text-3xl font-bold">Software Engineer</h2>
                            <h3 className="text-2xl font-semibold opacity-90 text-gray-300">Company XYZ</h3>
                            <h3 className="text-lg font-light opacity-80 mt-2">Aug 2023 - Present</h3>
                        </div>
                        <div className="mt-6 space-y-3">
                            <p className="leading-relaxed opacity-90">
                                Led backend API development using Node.js and optimized database queries for faster performance.
                            </p>
                            <p className="leading-relaxed opacity-90">
                                Designed CI/CD pipelines to enhance deployment speed and reliability.
                            </p>
                        </div>
                    </div>
                </div>

                <h1 className="text-black text-center text-4xl mt-12">Project Experience</h1>

                {/* Experience 3 */}
                <div
                    ref={(el) => experienceRefs.current[2] = el}
                    className="relative w-full md:w-3/4 h-[500px] rounded-2xl overflow-hidden bg-white p-8 shadow-lg"
                    style={{
                        backgroundImage: "url('./src/assets/pexels-steve-13551577.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center 100%",
                    }}
                >
                    <div className="absolute inset-0 bg-black/30"></div> {/* Dark Overlay */}
                    <div className="relative text-white text-left flex flex-col justify-center h-full space-y-4">
                        <div className="flex flex-col pb-12">
                            <h2 className="text-3xl font-bold">Vice Captain</h2>
                            <h3 className="text-2xl font-semibold opacity-90 text-gray-300">Team Red Baron, India</h3>
                            <h3 className="text-lg font-light opacity-80 mt-2">Jan 2020 - Jul 2021</h3>
                        </div>
                        <div className="mt-6 space-y-3">
                            <p className="leading-relaxed opacity-90">
                                Spearheaded aerodynamics simulations for the Formula Student racing team.
                            </p>
                            <p className="leading-relaxed opacity-90">
                                Led a team of engineers in designing a cutting-edge vehicle telemetry system.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experiences;
