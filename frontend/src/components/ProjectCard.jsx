import React from "react";

const ProjectCard = React.memo(({ project }) => {
    return (
        <div
            className="group flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-yellow-500/20 bg-[#111111] transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_0_40px_rgba(212,175,55,.25)]"
        >
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-52 sm:h-60 md:h-[14rem] w-full object-cover object-top transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                {/* {project.featured && (
                    <span className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full bg-gradient-to-r from-[#FFD700] to-[#D4AF37] px-3 py-1 text-[10px] sm:text-xs font-bold text-black shadow-lg">
                        ★ Featured
                    </span>
                )} */}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                <h3 className="text-xl sm:text-2xl font-bold transition duration-300 group-hover:text-yellow-300">
                    {project.title}
                </h3>

                <p className="mt-4 flex-1 text-sm sm:text-base leading-7 text-gray-400 line-clamp-4 max-h-[96px]">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies?.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-yellow-500/20 bg-[#1a1a1a] px-3 py-1 text-[11px] sm:text-xs text-yellow-300 transition hover:border-yellow-400 hover:bg-yellow-500 hover:text-black"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-xl border border-yellow-500/20 bg-[#1a1a1a] py-3 text-center text-sm sm:text-base font-medium text-yellow-300 transition-all duration-300 hover:border-yellow-400 hover:bg-[#222]"
                    >
                        GitHub
                    </a>

                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#D4AF37] py-3 text-center text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,.45)]"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
});

export default ProjectCard;