import { FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false); // Initially hidden

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNameClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const handleScrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed w-full top-0 left-0 z-50 transition-all duration-300">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">

                {/* Sidebar Container */}
                <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex items-start gap-6">

                    {/* Toggle Button*/}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className={`fixed left-[10px] top-1/2 -translate-y-1/2 p-2 rounded-full shadow-md transition-all duration-300 
                                    ${sidebarOpen ? "translate-x-[85px] left-[2px]" : "translate-x-0"}
                                    bg-black/50 text-white hover:scale-110`}
                        aria-label="Toggle Sidebar"
                    >
                        {sidebarOpen ? <FaAngleLeft className="w-7 h-7" /> : <FaAngleRight className="w-7 h-7" />}
                    </button>

                    {/* Sidebar */}
                    <div
                        className={`fixed top-1/2 -translate-y-1/2 left-0 flex flex-col items-center gap-2
                                    transition-all duration-500 ${sidebarOpen ? "translate-x-0" : "-translate-x-28 opacity-0"}`}
                    >
                        {/* Navigation Links */}
                        <div className={`flex flex-col gap-4 p-3 rounded-full transition-all duration-300 ml-4
                                        ${scrolled ? "bg-black/40 backdrop-blur-sm" : "bg-black/20"}`}>
                            {[
                                { id: "hero", icon: <FaHome className="w-6 h-6" />, label: "Home" },
                                { id: "about", icon: <FaUser className="w-5 h-5 ml-[2px]" />, label: "About" },
                                { id: "tech", icon: <FaCode className="w-6 h-6" />, label: "Technologies" },
                                { id: "exp", icon: <FaBriefcase className="w-6 h-6" />, label: "Experiences" },
                                { id: "projects", icon: <FaProjectDiagram className="w-6 h-6" />, label: "Projects" },
                                { id: "contact", icon: <FaEnvelope className="w-6 h-6" />, label: "Contact" }, // ✅ Added Contact Icon
                            ].map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleScrollTo(item.id)}
                                    aria-label={item.label}
                                    className="text-white transition-transform duration-200 hover:text-gray-300 hover:scale-110 active:scale-95 p-2"
                                >
                                    {item.icon}
                                </button>
                            ))}
                        </div>

                        {/* Social Icons */}
                        <div className={`flex flex-col gap-2 px-3 py-4 ml-4 rounded-full transition-all duration-300
                                        ${scrolled ? "bg-black/40 backdrop-blur-sm" : "bg-black/20"}`}>
                            <a
                                href="https://linkedin.com/in/supritspatil"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="text-2xl text-white transition-transform duration-200 hover:text-blue-400 hover:scale-110 active:scale-95 p-2"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://github.com/ssp964"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="text-2xl text-white transition-transform duration-200 hover:text-gray-400 hover:scale-110 active:scale-95 p-2"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://public.tableau.com/app/profile/suprit.shivshanthkumar.patil4360/vizzes"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Tableau Portfolio"
                                className="text-2xl text-white transition-transform duration-200 hover:text-blue-500 hover:scale-110 active:scale-95 p-2"
                            >
                                <SiTableau />
                            </a>

                            <a
                                href="https://www.instagram.com/suprit44_patil/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram Profile"
                                className="text-2xl text-white transition-transform duration-200 hover:text-pink-500 hover:scale-110 active:scale-95 p-2"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Name - Centered */}
                <button
                    onClick={handleNameClick}
                    className={`text-xl text-white font-['Arizonia'] tracking-wider 
                                hover:bg-white/20 active:scale-95 transform transition-all duration-200 
                                cursor-pointer border-none focus:outline-none
                                px-6 py-2 mt-2 rounded-full
                                ${scrolled ? "bg-black/40 backdrop-blur-sm" : "bg-black/20"}`}
                >
                    Suprit Patil
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
