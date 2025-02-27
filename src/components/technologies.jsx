import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
    { src: "/icons/python-svgrepo-com.svg", name: "Python" },
    { src: "/icons/icons8-r-project.svg", name: "R" },
    { src: "/icons/java-svgrepo-com.svg", name: "Java" },
    { src: "/icons/html-5-logo-svgrepo-com.svg", name: "HTML" },
    { src: "/icons/css-3-logo-svgrepo-com.svg", name: "CSS" },
    { src: "/icons/javascript-svgrepo-com.svg", name: "JavaScript" },
    { src: "/icons/tableau-icon-svgrepo-com.svg", name: "Tableau" },
    { src: "/icons/power-bi-icon.svg", name: "Power BI" },
    { src: "/icons/google-bigquery-logo-1.svg", name: "Big Query" },
    { src: "/icons/docker.svg", name: "Docker" },
    { src: "/icons/Kubernetes_logo_without_workmark.svg", name: "Kubernetes" },
    { src: "/icons/Apache Airflow.svg", name: "Apache Airflow" },
    { src: "/icons/Apache_Kafka_logo.svg", name: "Kafka" },
    { src: "/icons/microsoft-sql-server-logo-svgrepo-com.svg", name: "SQL Server" },
    { src: "/icons/snowflake-icon.svg", name: "Snowflake" },
    { src: "/icons/mysql-official.svg", name: "MySQL" },
    { src: "/icons/mongodb-icon.svg", name: "MongoDB" },
    { src: "/icons/oracle-icon.svg", name: "Oracle" },
    { src: "/icons/Microsoft_Office_Excel_(2019–present).svg", name: "Excel" },
    { src: "/icons/amazon_aws-icon.svg", name: "AWS" },
    { src: "/icons/Scikit_learn_logo_small.svg", name: "Scikit-learn" },
    { src: "/icons/tensorflow-icon.svg", name: "TensorFlow" },
    { src: "/icons/pandas.svg", name: "Pandas" },
    { src: "/icons/numpy-icon.svg", name: "NumPy" }
];

const Technologies = () => {
    const sectionRef = useRef(null);
    const techRefs = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                techRefs.current,
                { opacity: 0, y: 20, scale: 0.8 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%", // Start animation when 80% of the section is in view
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert(); // Clean up GSAP animations when component unmounts
    }, []);

    return (
        <div ref={sectionRef} id="tech" className="bg-black text-white min-h-screen flex flex-col">
            <h2 className="text-sm md:text-lg lg:text-xl font-[Montserrat] uppercase tracking-widest opacity-70 mt-20 mb-10 text-center">
                {`{ Technologies }`}
            </h2>

            <div className="max-w-6xl mx-auto flex flex-wrap gap-10 justify-center mb-16 md:mb-0 px-4 md:px-8">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        ref={(el) => (techRefs.current[index] = el)}
                        className="flex flex-col items-center"
                    >
                        {/* Button-like square for the icon */}
                        <div
                            className="w-24 h-24 bg-gray-800 rounded-xl flex items-center justify-center p-2 shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
                        >
                            <img
                                src={tech.src}
                                alt={tech.name}
                                className="w-12 h-12 object-contain transition-all duration-300 hover:scale-110"
                            />
                        </div>
                        {/* Tech name below the button */}
                        <p className="mt-6 text-sm text-gray-300 text-center">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;
