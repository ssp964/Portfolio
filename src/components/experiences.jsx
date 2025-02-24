import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
    const experienceRefs = useRef([]);

    useEffect(() => {
        experienceRefs.current.forEach((ref) => {
            gsap.to(ref.querySelector(".bg-overlay"), {
                y: "200px", // ✅ Increased effect to make scrolling more visible
                ease: "none",
                scrollTrigger: {
                    trigger: ref,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2, // ✅ More smooth and noticeable scrolling effect
                },
            });
        });

        // ✅ Ensure GSAP detects iPhone scroll
        ScrollTrigger.refresh();
        window.addEventListener("resize", () => ScrollTrigger.refresh());
    }, []);

    return (
        <section id="exp" className="w-full bg-white py-20">
            <h2 className="text-4xl md:text-7xl text-left font-bold mb-12 mt-2 px-6 md:px-24">
                Professional Experience
            </h2>

            {/* Experience Tiles Container */}
            <div className="max-w-8xl mx-auto flex flex-col gap-12 items-center justify-center px-4 md:px-8">

                {/* Experience 1 */}
                <div
                    ref={(el) => (experienceRefs.current[0] = el)}
                    className="relative w-full md:w-[1200px] h-[400px] rounded-[40px] bg-white p-8 shadow-lg will-change-transform overflow-hidden"
                >
                    {/* Background Pseudo-Element */}
                    <div
                        className="absolute bg-overlay"
                        style={{
                            top: "-50%", // ✅ Moves it upwards so it's not clipped
                            left: "0",
                            width: "100%",
                            height: "200%", // ✅ Extends beyond the parent to allow full scroll
                            backgroundImage: "url('./src/assets/pexels-jplenio-1103970.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            willChange: "transform",
                        }}
                    ></div>


                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/30 rounded-[40px]"></div>

                    {/* Content */}
                    <div className="relative text-white flex flex-col justify-center h-full space-y-4 z-10">
                        <div className="flex flex-col pb-6">
                            <h2 className="text-3xl font-bold">Application Development Analyst</h2>
                            <h3 className="text-2xl font-semibold opacity-90 text-gray-300">Accenture</h3>
                            <h3 className="text-lg font-light opacity-80 mt-2">Jan 2021 - Jul 2023</h3>
                        </div>
                        <div className="space-y-3">
                            <p className="leading-relaxed opacity-90">
                                Designed scalable data pipelines, migrating on-prem to GCP using DBT, BigQuery & Apache Airflow.
                            </p>
                            <p className="leading-relaxed opacity-90">
                                Developed interactive analytics dashboards on Tableau.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Experience 2 */}
                <div
                    ref={(el) => (experienceRefs.current[1] = el)}
                    className="relative w-full md:w-[1200px] h-[400px] rounded-[40px] bg-white p-8 shadow-lg will-change-transform overflow-hidden"
                >
                    {/* Background Pseudo-Element */}
                    <div
                        className="absolute bg-overlay"
                        style={{
                            top: "-50%", // ✅ Moves it upwards so it's not clipped
                            left: "0",
                            width: "100%",
                            height: "200%", // ✅ Extends beyond the parent to allow full scroll
                            backgroundImage: "url('./src/assets/pexels-steve-13551574.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            willChange: "transform",
                        }}
                    ></div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/30 rounded-[40px]"></div>

                    {/* Content */}
                    <div className="relative text-white flex flex-col justify-center h-full space-y-4 z-10">
                        <div className="flex flex-col pb-6">
                            <h2 className="text-3xl font-bold">Software Engineer</h2>
                            <h3 className="text-2xl font-semibold opacity-90 text-gray-300">Company XYZ</h3>
                            <h3 className="text-lg font-light opacity-80 mt-2">Aug 2023 - Present</h3>
                        </div>
                        <div className="space-y-3">
                            <p className="leading-relaxed opacity-90">
                                Led backend API development using Node.js and optimized database queries for faster performance.
                            </p>
                            <p className="leading-relaxed opacity-90">
                                Designed CI/CD pipelines to enhance deployment speed and reliability.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Project Experience Header */}
                <h1 className="text-black text-center text-4xl">Project Experience</h1>

                {/* Experience 3 */}
                <div
                    ref={(el) => (experienceRefs.current[2] = el)}
                    className="relative w-full md:w-[1200px] h-[400px] rounded-[40px] bg-white p-8 shadow-lg will-change-transform overflow-hidden"
                >
                    {/* Background Pseudo-Element */}
                    <div
                        className="absolute bg-overlay"
                        style={{
                            top: "-50%", // ✅ Moves it upwards so it's not clipped
                            left: "0",
                            width: "100%",
                            height: "200%", // ✅ Extends beyond the parent to allow full scroll
                            backgroundImage: "url('./src/assets/pexels-steve-13551577.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            willChange: "transform",
                        }}
                    ></div>


                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/30 rounded-[40px]"></div>

                    {/* Content */}
                    <div className="relative text-white flex flex-col justify-center h-full space-y-4 z-10">
                        <div className="flex flex-col pb-6">
                            <h2 className="text-3xl font-bold">Vice Captain</h2>
                            <h3 className="text-2xl font-semibold opacity-90 text-gray-300">Team Red Baron, India</h3>
                            <h3 className="text-lg font-light opacity-80 mt-2">Jan 2020 - Jul 2021</h3>
                        </div>
                        <div className="space-y-3">
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