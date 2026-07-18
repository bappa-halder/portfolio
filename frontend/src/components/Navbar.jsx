import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-yellow-500/10 bg-black/80 backdrop-blur-2xl">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-3xl font-bold tracking-wide transition duration-300 hover:scale-105"
                >
                    <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                        Bappa.
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="group relative font-medium text-gray-300 transition-all duration-300 hover:text-yellow-400"
                            >
                                {link.name}

                                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Resume Button */}
                <Link
                    to="/resume"
                    className="hidden items-center rounded-xl bg-gradient-to-r from-[#FFD700] to-[#D4AF37] px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] md:flex"
                >
                    Resume
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-3xl text-yellow-400 transition hover:rotate-90 md:hidden"
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden transition-all duration-500 md:hidden ${menuOpen ? "max-h-screen" : "max-h-0"
                    }`}
            >
                <div className="border-t border-yellow-500/10 bg-[#0d0d0d]/95 backdrop-blur-2xl">
                    <ul className="flex flex-col items-center gap-7 py-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-lg font-medium text-gray-300 transition hover:text-yellow-400"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        <li>
                            <Link
                                to="/resume"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-xl bg-gradient-to-r from-[#FFD700] to-[#D4AF37] px-7 py-3 font-semibold text-black shadow-lg shadow-yellow-500/20 transition hover:scale-105"
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;