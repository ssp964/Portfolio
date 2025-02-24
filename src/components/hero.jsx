import { useState } from 'react';

const Hero = () => {
    const [videoError, setVideoError] = useState(false);

    return (
        <section id="hero" className="relative w-full h-screen overflow-hidden">
            {/* Background Video or Fallback */}
            {!videoError ? (
                <div className="absolute inset-0">
                    <video
                        className="w-full h-full object-cover scale-[1.4] translate-x-10 md:translate-x-32 md:translate-y-32"
                        // className="w-full h-full object-cover scale-[1.6] translate-x-10 md:-translate-x-64 md:translate-y-14"
                        src="./src/assets/5495781-uhd_2560_1080_30fps.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        onError={(e) => {
                            console.error('Video error:', e);
                            setVideoError(true);
                        }}
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ) : (
                <div className="absolute top-0 h-screen w-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-35%,rgba(255,255,255,0.3),rgba(0,0,0,1))]"></div> // Fallback background if video fails
            )
            }

            {/* Hero Content */}
            <div className="relative h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-full flex flex-col justify-end">
                    {/* Text Container - Right Aligned */}
                    <div className="w-full flex justify-end mb-28">
                        <div className="bg-black/10 backdrop-blur-sm rounded-lg p-6 max-w-cl text-right">
                            <h1 className="text-white text-5xl md:text-7xl font-inter tracking-wide">
                                I am a Data Scientist
                            </h1>
                            <h2 className="text-white text-xl md:text-3xl font-inter tracking-wide mt-6">
                                Designing scalable data ecosystems<br />
                                to power the future of analytics and AI.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
