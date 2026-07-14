import React, { useEffect, useState } from "react";
import api from "../api/axios";

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await api.get(
                    "/skill/getAllSkill"
                );

                setSkills(res.data.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchSkills();
    }, []);

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-28 text-white"
        >
            {/* Background Glow */}
            <div className="absolute -top-20 sm:-top-28 right-0 h-64 w-64 sm:h-80 sm:w-80 md:h-[420px] md:w-[420px] rounded-full bg-yellow-500/10 blur-[120px] md:blur-[170px]" />

            <div className="absolute -bottom-20 -left-20 h-56 w-56 sm:h-72 sm:w-72 md:h-[380px] md:w-[380px] rounded-full bg-amber-500/10 blur-[120px] md:blur-[170px]" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-12 sm:mb-16 md:mb-20 text-center">
                    <span className="inline-block rounded-full border border-yellow-500/30 bg-[#111111] px-4 py-2 text-xs sm:text-sm font-medium text-yellow-300">
                        My Skills
                    </span>

                    <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Technologies{" "}
                        <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                            I Work With
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-gray-400">
                        I enjoy building fast, scalable, and responsive web
                        applications using modern technologies and best coding
                        practices.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {skills.length > 0 ? (
                        skills.map((skill, index) => (
                            <div
                                key={index}
                                className=" group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-yellow-500/20 bg-[#111111] p-4 sm:p-5 md:p-6 transition-all duration-300 hover:-translate-y-2 md:hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] "
                            >
                                {/* Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/5 opacity-0 transition duration-300 group-hover:opacity-100"></div>

                                {/* Icon */}
                                <div className="relative flex justify-center">
                                    <div
                                        className=" flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD700] to-[#B8860B] text-lg sm:text-xl md:text-2xl font-bold text-black shadow-[0_0_25px_rgba(212,175,55,.35)] transition-transform duration-300 group-hover:scale-110 "
                                    >
                                        {skill.icon ? (
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="h-10 w-10 object-contain"
                                            />
                                        ) : (
                                            <span className="text-2xl font-bold text-black">
                                                {skill.name.charAt(0).toUpperCase()}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Skill Name */}
                                <h3 className="relative mt-4 sm:mt-5 text-center text-sm sm:text-base md:text-lg font-semibold text-gray-200 transition duration-300 group-hover:text-yellow-300 break-words">
                                    {skill.name}
                                </h3>

                                {/* Bottom Line */}
                                <div className="mx-auto mt-4 h-[2px] w-8 sm:w-10 rounded-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent transition-all duration-300 group-hover:w-16 sm:group-hover:w-20"></div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-10 text-center">
                            <p className="text-base sm:text-lg text-gray-500">
                                No Skills Found
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;