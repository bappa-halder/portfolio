import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const roles = [
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
];
const availability = [
    "Available for Freelance",
    "Available for Full-Time",
    "Open to Remote Work",
    "Open to Contract Work",
];
const Hero = () => {
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [availableText, setAvailableText] = useState("");
    const [availableIndex, setAvailableIndex] = useState(0);
    const [availableDeleting, setAvailableDeleting] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const current = roles[roleIndex];
        const speed = isDeleting ? 40 : 80;

        timeoutRef.current = setTimeout(() => {
            if (!isDeleting) {
                const next = current.slice(0, text.length + 1);
                setText(next);

                if (next === current) {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                const next = current.slice(0, text.length - 1);
                setText(next);

                if (next === "") {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timeoutRef.current);
    }, [text, isDeleting, roleIndex]);

    useEffect(() => {
        const current = availability[availableIndex];
        const speed = availableDeleting ? 40 : 70;

        const timer = setTimeout(() => {
            if (!availableDeleting) {
                const next = current.slice(0, availableText.length + 1);
                setAvailableText(next);

                if (next === current) {
                    setTimeout(() => setAvailableDeleting(true), 1500);
                }
            } else {
                const next = current.slice(0, availableText.length - 1);
                setAvailableText(next);

                if (next === "") {
                    setAvailableDeleting(false);
                    setAvailableIndex(
                        (prev) => (prev + 1) % availability.length
                    );
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [availableText, availableDeleting, availableIndex]);


    return (
        <section
            id="home"
            className="relative overflow-hidden bg-black text-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:min-h-screen lg:pt-28"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] lg:h-[550px] lg:w-[550px] rounded-full bg-yellow-500/15 blur-[170px]" />

                <div className="absolute bottom-[-150px] right-[-80px] h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px] rounded-full bg-amber-500/10 blur-[150px]" />

                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(212,175,55,.15), transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(255,215,0,.08), transparent 35%)
          `,
                    }}
                />

                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
            </div>

            <div className="relative z-10 container mx-auto flex items-center px-5 sm:px-6 lg:min-h-screen">
                <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left */}
                    <div className="order-2 text-center lg:order-1 lg:text-left">
                        {/* Badge */}
                        {/* <div
                            className="
                inline-flex items-center
                rounded-full
                border border-yellow-500/30
                bg-[#111111]
                px-4 py-2
                text-[11px] sm:px-5 sm:text-xs
                font-medium
                text-yellow-300
                shadow-[0_0_25px_rgba(212,175,55,0.18)]
              "
                        >
                            ✦ Available for Freelance Work
                        </div> */}

                        <div
                            className=" inline-flex items-center rounded-full border border-yellow-500/30 bg-[#111111] px-4 py-2 sm:px-5 text-[11px] sm:text-xs font-medium text-yellow-300 shadow-[0_0_25px_rgba(212,175,55,0.18)] "
                        >
                            ✦ {availableText}
                            <span className="ml-1 animate-pulse">|</span>
                        </div>

                        {/* Heading */}
                        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                                Bappa Halder
                            </span>
                        </h1>

                        {/* Typing */}
                        <h2 className="mt-6 text-lg sm:text-xl md:text-2xl font-medium text-gray-300 h-8">
                            {text}
                            <span className="text-yellow-400 animate-pulse">|</span>
                        </h2>

                        {/* Description */}
                        <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0 text-gray-400">
                            I build modern, responsive, and scalable web applications using
                            the MERN Stack. Passionate about crafting beautiful user
                            interfaces, writing clean code, and delivering high-performance
                            digital experiences.
                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-5 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className=" w-full sm:w-auto px-7 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 "
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className=" w-full sm:w-auto px-7 py-3 rounded-xl border border-yellow-500/30 bg-[#111111] text-yellow-300 hover:bg-[#1a1a1a] hover:border-yellow-400 transition-all "
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="order-1 flex justify-center lg:order-2">
                        <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px] aspect-square">
                            {/* Glow */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-yellow-500/20 to-yellow-700/5 blur-xl" />

                            {/* Card */}
                            <div
                                className=" relative h-full rounded-[2.5rem] border border-yellow-500/20 bg-[#111111]/90 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,.7)] "
                            >
                                {/* Shine */}
                                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30" />

                                <div className="relative z-10 h-full flex flex-col items-center justify-center">
                                    {/* Initial */}
                                    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-transparent">
                                        BH
                                    </div>

                                    <p className="mt-4 text-yellow-300 tracking-[0.25em] uppercase text-xs sm:text-sm">
                                        MERN Developer
                                    </p>

                                    <div className="mt-8 h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

                                    {/* Skills */}
                                    <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-8">
                                        {[
                                            {
                                                icon: <FaReact />,
                                                label: "React",
                                                color: "text-sky-400",
                                            },
                                            {
                                                icon: <FaNodeJs />,
                                                label: "Node.js",
                                                color: "text-green-500",
                                            },
                                            {
                                                icon: <SiExpress />,
                                                label: "Express",
                                                color: "text-yellow-300",
                                            },
                                            {
                                                icon: <SiMongodb />,
                                                label: "MongoDB",
                                                color: "text-green-400",
                                            },
                                        ].map((tech, index) => (
                                            <div
                                                key={index}
                                                className=" flex items-center gap-2 rounded-full border border-yellow-500/20 bg-[#1a1a1a] px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-200 hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(212,175,55,0.35)] hover:-translate-y-1 transition-all duration-300 "
                                            >
                                                <span className={`text-base sm:text-lg ${tech.color}`}>
                                                    {tech.icon}
                                                </span>
                                                {tech.label}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom Text */}
                                    <p className="mt-8 text-xs sm:text-sm text-gray-500 text-sm tracking-widest">
                                        BUILD • DESIGN • DEPLOY
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Right */}
                </div>
            </div>
        </section>


    );
};

export default Hero;