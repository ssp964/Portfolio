import React from "react";
import { FaArrowUp } from "react-icons/fa";
import Rotating3DObject from "./rotatingContact"; // ✅ 3D Object Component

const Contact = () => {
    return (
        <div id="contact" className="w-full min-h-screen bg-white py-20 text-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Responsive Heading */}
                <h2 className="text-4xl md:text-7xl text-left font-bold mb-12 mt-2 px-6 md:px-0">
                    Work Together?
                </h2>

                <div className="flex flex-col gap-24">

                    <div className="flex flex-col md:flex-row items-center md:gap-10">

                        {/* Left Side - 3D Object (Similar to Project Image) */}
                        <div className="relative w-full md:w-[500px] h-[500px] overflow-hidden">
                            <Rotating3DObject />
                        </div>

                        {/* Right Side - Contact Details */}
                        <div className="text-center md:text-right">

                            {/* Social Links */}
                            <div className="flex justify-center md:justify-end gap-4 mt-3 text-xl text-gray-600 tracking-wide">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    LinkedIn ↗
                                </a>
                            </div>

                            {/* Email */}
                            <div className="mt-6">
                                <p className="text-sm uppercase tracking-widest opacity-50">Email</p>
                                <a href="mailto:supritshivshanthkumar.patil@gwu.edu"
                                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold hover:underline break-words">
                                    supritshivshanthkumar.patil@gwu.edu
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="mt-6">
                                <p className="text-sm uppercase tracking-widest opacity-50">Phone</p>
                                <a href="tel:+15712775400"
                                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold hover:underline">
                                    +1(571)-277-5400
                                </a>
                            </div>

                            {/* Back to Top Button */}
                            <div className="mt-6">
                                <a href="#top" className="text-sm uppercase tracking-widest justify-center md:justify-end hover:underline flex items-center gap-2">
                                    {`{ Back to Top }`} <FaArrowUp />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="pt-4 flex flex-col items-center text-center">
                <p className="text-md mt-4 opacity-50">© 2025</p>
                <p className="text-xs opacity-50">Design & Build by Suprit Patil</p>
            </div>
        </div>
    );
};

export default Contact;