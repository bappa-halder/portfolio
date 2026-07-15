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