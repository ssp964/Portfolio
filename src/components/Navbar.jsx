import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNameClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <nav className="fixed w-full top-0 left-0 z-50 overflow-hidden transition-all duration-300">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    {/* Name */}
                    <button
                        onClick={handleNameClick}
                        className={`text-xl text-white font-['Arizonia'] tracking-wider 
                                 hover:bg-white/20 active:scale-95 transform transition-all duration-200 
                                 cursor-pointer border-none focus:outline-none
                                 px-6 py-2 rounded-full
                                 ${scrolled ? 'bg-black/40 backdrop-blur-sm' : 'bg-black/20'}`}
                    >
                        Suprit Patil
                    </button>

                    {/* Social Icons */}
                    <div className={`flex items-center gap-2 px-4 py-1 rounded-full transition-all duration-300
                                   ${scrolled ? 'bg-black/40 backdrop-blur-sm' : 'bg-black/20'}`}>
                        <a href="https://linkedin.com/in/supritspatil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"
                            className="text-2xl text-white transition-transform duration-200 
                                       hover:text-blue-400 hover:scale-110 active:scale-95 p-2">
                            <FaLinkedin />
                        </a>
                        <div className="w-[1px] h-6 bg-white/20"></div>

                        <a href="https://github.com/ssp964" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
                            className="text-2xl text-white transition-transform duration-200 
                                       hover:text-gray-400 hover:scale-110 active:scale-95 p-2">
                            <FaGithub />
                        </a>
                        <div className="w-[1px] h-6 bg-white/20"></div>

                        <a href="https://public.tableau.com/app/profile/suprit.shivshanthkumar.patil4360/vizzes" target="_blank" rel="noopener noreferrer" aria-label="Tableau Portfolio"
                            className="text-2xl text-white transition-transform duration-200 
                                       hover:text-blue-500 hover:scale-110 active:scale-95 p-2">
                            <SiTableau />
                        </a>
                        <div className="w-[1px] h-6 bg-white/20"></div>

                        <a href="https://www.instagram.com/suprit44_patil/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"
                            className="text-2xl text-white transition-transform duration-200 
                                       hover:text-pink-500 hover:scale-110 active:scale-95 p-2">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
