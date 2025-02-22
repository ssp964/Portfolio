import React from 'react';
import { ABOUT_TEXT } from '../constants';
import profilePic from '../assets/kevinRushProfile.jpg'; // Update this path to your profile picture

const About = () => {
    return (
        <section className="w-full min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-black mb-12">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Profile Picture Container */}
                    <div className="w-full md:w-2/3 aspect-square">
                        <div className="relative w-full h-full rounded-4xl p-1">
                            <div className="absolute inset-0"></div>
                            <img
                                src={profilePic}
                                alt="Suprit Patil"
                                className="relative w-full h-full object-cover rounded-3xl p-[2px]"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-2/3">
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {ABOUT_TEXT}
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;