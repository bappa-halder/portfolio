import { useState } from "react";
import {
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
    FiShield,
} from "react-icons/fi";
import bg from "../assets/auth_bg.png"
import logo from "../assets/logo.png"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#060606] text-white">
            {/* Background Glow */}
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[180px]" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[180px]" />

            <div className="flex min-h-screen items-center justify-center px-4 py-10">
                <div className="w-full max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b]/90 shadow-[0_0_70px_rgba(0,0,0,0.6)] backdrop-blur-xl" style={{
                    backgroundImage: `
      linear-gradient(rgba(0,0,0,.82), rgba(0,0,0,.82)),
      url(${bg})
    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>

                    <div className="grid lg:grid-cols-2">

                        {/* ================= Left Side ================= */}

                        <div className="relative hidden lg:flex flex-col items-center justify-center border-r border-white/10 bg-gradient-to-br px-16 py-20">

                            {/* Decorative Lines */}

                            <div className="absolute left-0 top-0 h-44 w-44 border-l border-t border-yellow-500/30" />
                            <div className="absolute bottom-0 left-0 h-44 w-44 border-l border-b border-yellow-500/20" />

                            {/* Logo */}

                            <div className="mb-6">
                                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 text-5xl font-bold text-yellow-400 shadow-lg shadow-yellow-500/10">
                                    <img src={logo} alt="" className="rounded-full object-contain" />
                                </div>
                            </div>

                            <h2 className="text-center text-4xl font-bold tracking-widest">
                                PORTFOLIO{" "}
                                <span className="text-yellow-400">ADMIN</span>
                            </h2>

                            <div className="my-8 h-[2px] w-24 bg-yellow-500" />

                            <p className="max-w-sm text-center text-lg leading-9 text-gray-400">
                                Manage your portfolio with power, elegance and complete
                                control.
                            </p>




                        </div>

                        {/* ================= Right Side ================= */}

                        <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">

                            <div className="w-full max-w-lg">

                                <div className="mb-10 text-center">

                                    <h1 className="text-4xl font-bold">
                                        Welcome{" "}
                                        <span className="text-yellow-400">
                                            Back
                                        </span>
                                    </h1>

                                    <p className="mt-3 text-lg text-gray-400">
                                        Login to access your admin dashboard
                                    </p>

                                </div>

                                {/* Email */}

                                <div className="mb-6">

                                    <label className="mb-3 block font-medium">
                                        Email Address
                                    </label>

                                    <div className="flex h-14 items-center rounded-xl border border-white/10 bg-[#111111] px-5 transition focus-within:border-yellow-400">

                                        <FiMail className="text-2xl text-yellow-400" />

                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="ml-4 w-full bg-transparent outline-none placeholder:text-gray-500"
                                        />

                                    </div>

                                </div>

                                {/* Password */}

                                <div>

                                    <label className="mb-3 block font-medium">
                                        Password
                                    </label>

                                    <div className="flex h-14 items-center rounded-xl border border-white/10 bg-[#111111] px-5 transition focus-within:border-yellow-400">

                                        <FiLock className="text-2xl text-yellow-400" />

                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            className="ml-4 w-full bg-transparent outline-none placeholder:text-gray-500"
                                        />

                                        <button
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            {showPassword ? (
                                                <FiEyeOff className="text-2xl text-gray-400" />
                                            ) : (
                                                <FiEye className="text-2xl text-gray-400" />
                                            )}
                                        </button>

                                    </div>

                                </div>

                                {/* Remember */}

                                <div className="my-8 flex items-center justify-between">

                                    <label className="flex cursor-pointer items-center gap-3">

                                        <input
                                            type="checkbox"
                                            className="h-5 w-5 accent-yellow-400"
                                        />

                                        <span className="text-gray-300">
                                            Remember me
                                        </span>

                                    </label>

                                    <button className="text-yellow-400 hover:text-yellow-300">
                                        Forgot Password?
                                    </button>

                                </div>

                                {/* Login */}

                                <button className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 text-xl font-semibold text-black transition hover:scale-[1.02]">

                                    <FiLock className="text-2xl" />

                                    Login

                                </button>



                                <p className="mt-12 text-center text-gray-500">

                                    © 2026{" "}
                                    <span className="text-yellow-400">
                                        Portfolio Admin
                                    </span>

                                    . All rights reserved.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;