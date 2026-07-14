import React from "react";
import { useForm } from "react-hook-form";
import {
    FiMail,
    FiMapPin,
    FiPhone,
    FiSend,
} from "react-icons/fi";
import api from "../api/axios";
import toast from "react-hot-toast";

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const handleMessage = async (data) => {
        try {
            const response = await api.post("/contact/sendMessage", data)
            toast.success(response.data.message)
            reset()
        } catch (error) {
            toast.error(error.response?.data?.message)
        }
    }
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-black py-16 sm:py-20 md:py-24 lg:py-28 text-white"
        >
            {/* Background Glow */}
            <div className="absolute -top-20 right-0 h-64 w-64 sm:h-80 sm:w-80 md:h-[420px] md:w-[420px] rounded-full bg-yellow-500/10 blur-[120px] md:blur-[180px]" />

            <div className="absolute -bottom-20 -left-20 h-56 w-56 sm:h-72 sm:w-72 md:h-[380px] md:w-[380px] rounded-full bg-amber-500/10 blur-[120px] md:blur-[170px]" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-12 sm:mb-16 md:mb-20 text-center">
                    <span className="inline-block rounded-full border border-yellow-500/30 bg-[#111111] px-4 py-2 text-xs sm:text-sm font-medium text-yellow-300">
                        Contact Me
                    </span>

                    <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Let's{" "}
                        <span className="bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                            Work Together
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-gray-400">
                        Have an idea, freelance project, or full-time opportunity? I'd
                        love to hear from you and discuss how we can build something
                        amazing together.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-6 sm:space-y-8">
                        {/* Intro Card */}
                        <div className="rounded-2xl sm:rounded-3xl border border-yellow-500/20 bg-[#111111] p-5 sm:p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,.45)]">
                            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-300">
                                Get In Touch
                            </h3>

                            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
                                Whether you're looking for a MERN Stack Developer,
                                have a freelance project, or simply want to connect,
                                my inbox is always open.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4 sm:space-y-5">
                            {[
                                {
                                    icon: <FiMail />,
                                    title: "Email",
                                    value: "bappahalder2207@gmail.com",
                                },
                                {
                                    icon: <FiPhone />,
                                    title: "Phone",
                                    value: "+91 8838955446",
                                },
                                {
                                    icon: <FiMapPin />,
                                    title: "Location",
                                    value: "West Bengal, India",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className=" flex items-center gap-4 sm:gap-5 rounded-2xl border border-yellow-500/20 bg-[#111111] p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(212,175,55,.25)] "
                                >
                                    <div
                                        className=" flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#FFD700] to-[#D4AF37] text-xl sm:text-2xl text-black "
                                    >
                                        {item.icon}
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-xs sm:text-sm text-gray-500">
                                            {item.title}
                                        </p>

                                        <h4 className="mt-1 text-sm sm:text-base font-semibold text-white break-all">
                                            {item.value}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-2xl sm:rounded-3xl border border-yellow-500/20 bg-[#111111] p-5 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,.45)]">
                        <form onSubmit={handleSubmit(handleMessage)} className="space-y-5 sm:space-y-6">
                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    {...register("fullName", { required: "Full name is required" })}
                                    className=" w-full rounded-xl border border-yellow-500/20 bg-[#1a1a1a] px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/20 "
                                />
                                {errors.fullName && (<p>{errors.fullName.message}</p>)}
                            </div>

                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register("email", { required: "Email is required" })}
                                    className=" w-full rounded-xl border border-yellow-500/20 bg-[#1a1a1a] px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/20 "
                                />
                                {errors.email && (<p>{errors.email.message}</p>)}
                            </div>

                            <div>
                                <label className="mb-2 block text-sm text-gray-300">
                                    Message
                                </label>

                                <textarea
                                    rows={6}
                                    placeholder="Write your message..."
                                    {...register("message", { required: "Message is required" })}
                                    className=" w-full resize-none rounded-xl border border-yellow-500/20 bg-[#1a1a1a] px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/20 "
                                />
                                {errors.message && (<p>{errors.message.message}</p>)}
                            </div>

                            <button
                                type="submit"
                                className=" flex w-full items-center justify-center gap-2 sm:gap-3 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#D4AF37] py-3 sm:py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,.45)] "
                            >
                                <FiSend />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;