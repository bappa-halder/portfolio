import React, { useEffect, useState } from "react";
import api from "../api/axios";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.get(
                    "/project/getFeaturedProject"
                );

                setProjects(response.data.data);
            } catch (error) {
                console.log(error.response?.data?.message);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-28 text-white"
        >
            {/* Background Glow */}
            <div className="absolute -top-20 left-0 h-64 w-64 sm:h-80 sm:w-80 md:h-[420px] md:w-[420px] rounded-full bg-yellow-500/10 blur-[120px] md:blur-[180px]" />

            <div className="absolute -bottom-16 right-0 h-60 w-60 sm:h-72 sm:w-72 md:h-[400px] md:w-[400px] rounded-full bg-amber-500/10 blur-[120px] md:blur-[170px]" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-12 sm:mb-16 md:mb-20 text-center">
                    <span className="inline-block rounded-full border border-yellow-500/30 bg-[#111111] px-4 py-2 text-xs sm:text-sm font-medium text-yellow-300">
                        My Portfolio
                    </span>

                    <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-gray-400">
                        A collection of modern web applications built using the MERN
                        Stack with clean architecture, responsive UI, and
                        production-ready features.
                    </p>
                </div>

                {/* Projects */}
                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            // <div
                            //     key={project._id}
                            //     className=" group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-yellow-500/20 bg-[#111111] transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(212,175,55,.25)] "
                            // >
                            //     {/* Image */}
                            //     <div className="relative overflow-hidden">
                            //         <img
                            //             src={project.image}
                            //             alt={project.title}
                            //             loading="lazy"
                            //             decoding="async"
                            //             className="h-52 sm:h-60 md:h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                            //         />

                            //         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

                            //         {project.featured && (
                            //             <span className="absolute left-3 top-3 sm:left-4 sm:top-4 rounded-full bg-gradient-to-r from-[#FFD700] to-[#D4AF37] px-3 py-1 text-[10px] sm:text-xs font-bold text-black shadow-lg">
                            //                 ★ Featured
                            //             </span>
                            //         )}
                            //     </div>

                            //     {/* Content */}
                            //     <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                            //         <h3 className="text-xl sm:text-2xl font-bold transition duration-300 group-hover:text-yellow-300">
                            //             {project.title}
                            //         </h3>

                            //         <p className="mt-4 flex-1 text-sm sm:text-base leading-7 text-gray-400 line-clamp-4">
                            //             {project.description}
                            //         </p>

                            //         {/* Tech Stack */}
                            //         <div className="mt-5 flex flex-wrap gap-2">
                            //             {project.technologies?.map((tech, index) => (
                            //                 <span
                            //                     key={index}
                            //                     className=" rounded-full border border-yellow-500/20 bg-[#1a1a1a] px-3 py-1 text-[11px] sm:text-xs text-yellow-300 transition hover:border-yellow-400 hover:bg-yellow-500 hover:text-black "
                            //                 >
                            //                     {tech}
                            //                 </span>
                            //             ))}
                            //         </div>

                            //         {/* Buttons */}
                            //         <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            //             <a
                            //                 href={project.github}
                            //                 target="_blank"
                            //                 rel="noreferrer"
                            //                 className=" flex-1 rounded-xl border border-yellow-500/20 bg-[#1a1a1a] py-3 text-center text-sm sm:text-base font-medium text-yellow-300 transition-all duration-300 hover:border-yellow-400 hover:bg-[#222] "
                            //             >
                            //                 GitHub
                            //             </a>

                            //             <a
                            //                 href={project.live}
                            //                 target="_blank"
                            //                 rel="noreferrer"
                            //                 className=" flex-1 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#D4AF37] py-3 text-center text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,.45)] "
                            //             >
                            //                 Live Demo
                            //             </a>
                            //         </div>
                            //     </div>
                            // </div>
                            <ProjectCard key={project._id} project={project} />
                        ))
                    ) : (
                        <div className="col-span-full py-16 text-center">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-500">
                                No Projects Found
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;