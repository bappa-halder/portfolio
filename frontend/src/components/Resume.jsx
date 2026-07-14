import React from "react";
import resumePdf from "../assets/Bappa_Halder_MERN_Resume.pdf";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const Resume = () => {
    return (
        // <div className="min-h-screen bg-black p-5">
        //     <div className="mx-auto max-w-6xl">
        //         <iframe
        //             src={resumePdf}
        //             title="Resume"
        //             className="h-[90vh] w-full rounded-xl border border-yellow-500"
        //         />

        //         <div className="mt-6 flex items-center justify-center gap-4">

        //             <a
        //                 href={resumePdf}
        //                 download="Bappa_Halder_MERN_Resume.pdf"
        //                 className=" w-full sm:w-auto px-7 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 "
        //             >
        //                 Download Resume
        //             </a>

        //             <Link
        //                 to="/"
        //                 className="w-full flex items-center gap-2 sm:w-auto px-7 py-3 rounded-xl border border-yellow-500/30 bg-[#111111] text-yellow-300 hover:bg-[#1a1a1a] hover:border-yellow-400 transition-all "
        //             >
        //                 <HiArrowLeft /> Home
        //             </Link>

        //         </div>
        //     </div>
        // </div>

        <div className="min-h-screen bg-black p-4 sm:p-5 md:p-8">

            <div className="mx-auto max-w-6xl">

                {/* PDF Viewer */}
                <div className="w-full">
                    <iframe
                        src={resumePdf}
                        title="Resume"
                        className="h-[75vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] w-full rounded-xl border border-yellow-500"
                    />
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">

                    <a
                        href={resumePdf}
                        download="Bappa_Halder_MERN_Resume.pdf"
                        className="w-full sm:w-auto text-center px-7 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                    >
                        Download Resume
                    </a>

                    <Link
                        to="/"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-xl border border-yellow-500/30 bg-[#111111] text-yellow-300 transition-all hover:bg-[#1a1a1a] hover:border-yellow-400"
                    >
                        <HiArrowLeft />
                        Home
                    </Link>

                </div>

            </div>
        </div>

    );
};

export default Resume;