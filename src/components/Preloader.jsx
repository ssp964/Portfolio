import { useEffect } from "react";
import gsap from "gsap";
import anime from "animejs";

const Preloader = () => {

    useEffect(() => {
        const colors = ["#000000", "#454545", "#808080", "#bababa", "#e2e2e2"];

        // Create a timeline that repeats infinitely, with a delay and yoyo effect
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.40, yoyo: true });

        // Box1 animation: moves horizontally and changes color
        tl.to(".box1", {
            x: 140,                    // Move to 140px (or adjust as needed)
            backgroundColor: colors[4],// Change to light gray from your colors array
            duration: 1,               // Duration of 1 second
            ease: "power2.inOut"       // Smooth easing
        }, 0); // start at time 0

        // Box2 animation: keyframed jump with integrated squeeze effect
        tl.fromTo(".box2",
            { x: 0, y: 0, backgroundColor: colors[1], rotation: 0, scaleX: 1, scaleY: 1 },
            {
                keyframes: [
                    { x: -15, y: -35, rotation: -90, backgroundColor: colors[1], duration: 0.4 },// Mid-air jump
                    { x: -30, y: 0, rotation: -180, backgroundColor: colors[0], duration: 0.4 }, // Landing
                    { scaleX: 1.2, scaleY: 0.8, duration: 0.05, ease: "power1.out" },            // Squeeze on landing
                    { scaleX: 1, scaleY: 1, duration: 0.05, ease: "power1.inOut" }               // Return to normal scale
                ],
                ease: "power1.out"
            }, 0.1);

        // Box3 animation: keyframed jump with integrated squeeze effect
        tl.fromTo(".box3",
            { x: 0, y: 0, backgroundColor: colors[2], rotation: 0, scaleX: 1, scaleY: 1 },
            {
                keyframes: [
                    { x: -15, y: -35, rotation: -90, backgroundColor: colors[2], duration: 0.4 },// Mid-air jump
                    { x: -30, y: 0, rotation: -180, backgroundColor: colors[1], duration: 0.4 }, // Landing
                    { scaleX: 1.2, scaleY: 0.8, duration: 0.05, ease: "power1.out" },            // Squeeze on landing
                    { scaleX: 1, scaleY: 1, duration: 0.05, ease: "power1.inOut" }               // Return to normal scale
                ],
                ease: "power1.out"
            }, 0.2);

        // Box4 animation: keyframed jump with integrated squeeze effect
        tl.fromTo(".box4",
            { x: 0, y: 0, backgroundColor: colors[3], rotation: 0, scaleX: 1, scaleY: 1 },
            {
                keyframes: [
                    { x: -15, y: -35, rotation: -90, backgroundColor: colors[3], duration: 0.4 },// Mid-air jump
                    { x: -30, y: 0, rotation: -180, backgroundColor: colors[2], duration: 0.4 }, // Landing
                    { scaleX: 1.2, scaleY: 0.8, duration: 0.05, ease: "power1.out" },            // Squeeze on landing
                    { scaleX: 1, scaleY: 1, duration: 0.05, ease: "power1.inOut" }               // Return to normal scale
                ],
                ease: "power1.out"
            }, 0.3);

        // Box5 animation: keyframed jump with integrated squeeze effect
        tl.fromTo(".box5",
            { x: 0, y: 0, backgroundColor: colors[4], rotation: 0, scaleX: 1, scaleY: 1 },
            {
                keyframes: [
                    { x: -15, y: -35, rotation: -90, backgroundColor: colors[4], duration: 0.4 },// Mid-air jump
                    { x: -30, y: 0, rotation: -180, backgroundColor: colors[3], duration: 0.4 }, // Landing
                    { scaleX: 1.2, scaleY: 0.8, duration: 0.05, ease: "power1.out" },            // Squeeze on landing
                    { scaleX: 1, scaleY: 1, duration: 0.05, ease: "power1.inOut" }               // Return to normal scale
                ],
                ease: "power1.out"
            }, 0.4);

        // After 3 seconds, fade out the pre-loader (which contains the loader-wrapper and boxes)
        gsap.to(".pre-loader", { opacity: 0, duration: 0.6, delay: 3, ease: "power1.inOut" });

        // 2. Text Split and Animation (Triggered after 3.1 seconds)
        setTimeout(() => {
            const textWrapper = document.querySelector(".loader-text");
            if (textWrapper) {
                // Wrap each character in a span
                textWrapper.innerHTML = textWrapper.textContent
                    .split("")
                    .map(char => char === " " ? "<span class='space'>&nbsp;</span>" : `<span class='letter'>${char}</span>`)
                    .join("");

                // Animate the letters using anime.js
                // Inside your setTimeout that triggers the text animation:
                anime.timeline({
                    complete: () => {
                        gsap.timeline()
                            // Bring in the revealer container (so that the stripes become visible)
                            .to(".revealer", {
                                opacity: 1,
                                duration: 0.1,
                                ease: "power3.in",
                            })
                            // Then animate the stripes upward (revealing the landing page)
                            .to(".revealer .stripe", {
                                y: "-100%",
                                duration: 1.2,
                                ease: "power2.out",
                                stagger: 0.1,
                            }, ">")
                            // Fade out the text concurrently with the stripe animation
                            .to(".loader-text", {
                                opacity: 0,
                                duration: 1.2,
                                ease: "power2.inOut",
                            }, "<")
                            // Optionally, fade out the entire pre-loader container afterward
                            .to(".pre-loader-container", {
                                opacity: 0,
                                duration: 0.1,
                                ease: "power1.inOut",
                            }, "-=0.6");
                    }
                }).add({
                    targets: ".loader-text .letter",
                    translateX: [40, 0],
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 1200,
                    delay: (el, i) => 100 + 30 * i,
                });


            }
        }, 3100);

    }, []);


    return (
        <div className="pre-loader-container">
            <div className="loader-text-wrapper">
                <h1 className="loader-text">Suprit Patil</h1>
                <div className="revealer">
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                    <div className="stripe"></div>
                </div>
            </div>
            <div className="pre-loader">
                <div className="loader-wrapper">
                    <div className="loader">
                        <div className="box1 w-6 h-6 rounded-[25%] bg-[#000000]"></div>
                        <div className="box2 w-6 h-6 rounded-[25%] bg-[#454545]"></div>
                        <div className="box3 w-6 h-6 rounded-[25%] bg-[#808080]"></div>
                        <div className="box4 w-6 h-6 rounded-[25%] bg-[#bababa]"></div>
                        <div className="box5 w-6 h-6 rounded-[25%] bg-[#f5f5f5]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;



//template of the sliding elements
// gsap.to(".box1",
//     {
//         x: 140, // Move to 160px
//         backgroundColor: colors[4], // Change to light gray
//         duration: 1, // Takes 1 second
//         ease: "power1.inOut", // Smooth acceleration & deceleration
//         repeat: -1, // Infinite loop
//         yoyo: true, // Moves back to 0 and repeats
//     }
// );

// gsap.fromTo(".box2",
//     { x: 0, y: 0, backgroundColor: colors[0], rotation: 0 }, // Start at (0,0)
//     {
//         keyframes: [
//             { x: -17.5, y: -50, rotation: 90, backgroundColor: colors[1], duration: 0.3 }, // Mid-air jump
//             { x: -35, y: 0, rotation: 180, backgroundColor: colors[2], duration: 0.3 }, // Lands
//         ],
//         ease: "power1.out", // Smooth jump movement
//         repeat: -1, // Infinite loop
//         repeatDelay: 0.45, // Delay between jumps
//         yoyo: true, // Moves back to 0 and repeats
//     }
// );

