import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebookF,
    FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
    const links = [
        { name: "Home", href: "" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const socials = [
        {
            icon: <FaGithub />,
            href: "https://github.com/",
        },
        {
            icon: <FaLinkedin />,
            href: "https://in.linkedin.com/",
        }
    ];

    return (
        <footer className="relative overflow-hidden border-t border-yellow-500/10 bg-black text-white">
            {/* Background Glow */}
            <div className="absolute left-0 top-0 h-56 w-56 sm:h-72 sm:w-72 md:h-[320px] md:w-[320px] rounded-full bg-yellow-500/10 blur-[120px] md:blur-[170px]" />

            <div className="absolute bottom-0 right-0 h-56 w-56 sm:h-72 sm:w-72 md:h-[320px] md:w-[320px] rounded-full bg-amber-500/10 blur-[120px] md:blur-[170px]" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Top Section */}
                <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold">
                            <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                                Bappa Halder
                            </span>
                        </h2>

                        <p className="mx-auto md:mx-0 mt-4 sm:mt-5 max-w-sm text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
                            MERN Stack Developer passionate about building modern,
                            scalable, and high-performance web applications with elegant
                            user experiences.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="text-center md:text-left">
                        <h3 className="mb-5 text-lg sm:text-xl font-semibold text-yellow-300">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 sm:space-y-4">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="inline-block text-sm sm:text-base text-gray-400 transition-all duration-300 hover:pl-2 hover:text-yellow-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="text-center md:text-left">
                        <h3 className="mb-5 text-lg sm:text-xl font-semibold text-yellow-300">
                            Connect With Me
                        </h3>

                        <div className="flex justify-center md:justify-start flex-wrap gap-3 sm:gap-4">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className=" flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full border border-yellow-500/20 bg-[#111111] text-lg sm:text-xl text-yellow-300 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#D4AF37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,.45)] "
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-500">
                            Let's build something amazing together.
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 sm:mt-14 flex flex-col gap-5 sm:gap-6 border-t border-yellow-500/10 pt-6 sm:pt-8 md:flex-row md:items-center md:justify-between">
                    <p className="text-center md:text-left text-sm sm:text-base text-gray-500 leading-7">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-semibold text-yellow-300">
                            Bappa Halder
                        </span>
                        . All Rights Reserved.
                    </p>

                    <a
                        href="/"
                        className=" mx-auto md:mx-0 flex h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-lg sm:text-xl text-black transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(212,175,55,.45)] "
                    >
                        <FaArrowUp />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;