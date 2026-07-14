import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-28 text-white"
        >
            {/* Background Glow */}
            <div className="absolute -left-32 top-10 h-[220px] w-[220px] rounded-full bg-yellow-500/10 blur-[90px] sm:h-[320px] sm:w-[320px] sm:blur-[120px] lg:-left-40 lg:top-20 lg:h-[450px] lg:w-[450px] lg:blur-[180px]" />
            <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-amber-500/10 blur-[90px] sm:h-[320px] sm:w-[320px] sm:blur-[120px] lg:h-[400px] lg:w-[400px] lg:blur-[170px]" />

            <div className="container relative mx-auto px-5 sm:px-6">
                {/* Heading */}
                <div className="mb-12 text-center sm:mb-16 lg:mb-20">
                    <span className="rounded-full border border-yellow-500/30 bg-[#111111] px-4 py-2 text-[11px] sm:px-5 sm:text-sm font-medium text-yellow-300">
                        About Me
                    </span>

                    <h2 className="mt-6 font-bold text-3xl sm:text-4xl lg:text-5xl">
                        Get To Know{" "}
                        <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                            Me Better
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 px-2 sm:px-0 text-gray-400">
                        Passionate MERN Stack Developer dedicated to building
                        modern, scalable, and user-centric web applications with
                        clean architecture and elegant user experiences.
                    </p>
                </div>

                {/* Content */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left Card */}
                    <div className="order-1 flex justify-center lg:order-none">
                        <div className="relative">
                            {/* Glow */}
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-yellow-500/20 to-yellow-700/5 blur-xl" />

                            {/* Card */}
                            <div className="relative rounded-[2rem] border border-yellow-500/20 bg-[#111111]/90 p-4 sm:p-6 lg:p-8 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,.65)]">
                                <div className="flex aspect-square w-[220px] sm:w-[280px] md:w-[330px] lg:w-[320px] items-center justify-center rounded-[1.5rem] border border-yellow-500/20 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-[1.5rem] border border-yellow-500/20 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]">
                                    <span className="bg-gradient-to-r from-[#FFD700] to-[#B8860B] bg-clip-text text-6xl sm:text-7xl lg:text-8xl font-bold text-transparent">
                                        BH
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="order-2 text-center lg:order-none lg:text-left">
                        <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-yellow-400">
                            MERN Stack Developer
                        </span>

                        <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                                Bappa Halder
                            </span>
                        </h3>

                        <p className="mt-6 text-base leading-7 sm:leading-8 text-gray-400">
                            I specialize in creating fast, scalable, and visually
                            appealing web applications using the MERN Stack.
                            I enjoy transforming ideas into responsive digital
                            experiences with clean code and modern UI design.
                        </p>

                        <p className="mt-5 text-base leading-7 sm:leading-8 text-gray-400">
                            My core expertise includes React.js, Node.js,
                            Express.js, MongoDB, JavaScript (ES6+), Tailwind CSS,
                            REST APIs, Git, and responsive web development.
                            I'm constantly learning new technologies to deliver
                            better solutions.
                        </p>

                        {/* Stats */}
                        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
                            {[
                                {
                                    number: "20+",
                                    title: "Projects Completed",
                                },
                                {
                                    number: "2+",
                                    title: "Years Experience",
                                },
                                {
                                    number: "10+",
                                    title: "Technologies",
                                },
                                {
                                    number: "100%",
                                    title: "Client Focus",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="
                                        rounded-2xl
                                        border
                                        border-yellow-500/20
                                        bg-[#111111]
                                        p-5 sm:p-6
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                        hover:border-yellow-400
                                        hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]
                                    "
                                >
                                    <h4 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                                        {item.number}
                                    </h4>

                                    <p className="mt-3 text-gray-400">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <a
                            href="#contact"
                            className=" mt-10 inline-flex w-full justify-center px-7 py-3.5 sm:w-auto items-center gap-3 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#D4AF37] font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,.45)] "
                        >
                            Let's Connect
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;