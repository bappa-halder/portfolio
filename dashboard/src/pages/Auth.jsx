import { useState } from "react";
import {
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
    FiShield,
} from "react-icons/fi";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

            {/* ================= BACKGROUND ================= */}

            <div className="absolute inset-0">

                {/* Grid */}

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

                {/* Glow */}

                <div className="absolute -left-44 top-0 h-[520px] w-[520px] rounded-full bg-yellow-500/10 blur-[180px]" />

                <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[170px]" />

                <div className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-300/5 blur-[160px]" />

                {/* Shapes */}

                <div className="absolute left-10 top-24 h-32 w-32 rotate-45 border border-yellow-500/20" />

                <div className="absolute right-20 top-40 h-24 w-24 rounded-full border border-yellow-500/20" />

                <div className="absolute bottom-24 left-16 h-40 w-40 rotate-12 border border-yellow-500/10" />

            </div>

            {/* ================= CONTENT ================= */}

            <div className="relative flex min-h-screen items-center justify-center px-5 py-10">

                <div
                    className="
          relative
          w-full
          max-w-7xl
          overflow-hidden
          rounded-[34px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-3xl
          shadow-[0_30px_90px_rgba(0,0,0,.75)]
        "
                >

                    {/* Border Glow */}

                    <div className="absolute inset-0 rounded-[34px] border border-yellow-500/10" />

                    <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-yellow-500/10 blur-[130px]" />

                    <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-yellow-500/10 blur-[140px]" />

                    <div className="grid lg:grid-cols-2">

                        {/* ====================================================== */}
                        {/* LEFT SECTION */}
                        {/* ====================================================== */}

                        <div className="relative hidden lg:flex flex-col justify-between overflow-hidden border-r border-white/10 p-14">

                            {/* Decorative */}

                            <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-yellow-500/10 blur-[130px]" />

                            <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-yellow-500/5 blur-[130px]" />

                            {/* LOGO */}

                            <div>

                                <div className="flex items-center gap-5">

                                    <div
                                        className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-yellow-400/40
                    bg-gradient-to-br
                    from-yellow-400/20
                    to-yellow-500/10
                    text-3xl
                    font-black
                    tracking-wider
                    text-yellow-400
                    shadow-[0_0_35px_rgba(255,191,0,.25)]
                  "
                                    >
                                        BH
                                    </div>

                                    <div>

                                        <h2 className="text-3xl font-black tracking-wide">
                                            PORTFOLIO
                                        </h2>

                                        <p className="mt-1 text-yellow-400 tracking-[6px] uppercase text-sm">
                                            ADMIN PANEL
                                        </p>

                                    </div>

                                </div>

                                <div className="mt-16">

                                    <h1 className="text-6xl font-black leading-tight">

                                        Manage

                                        <span className="block text-yellow-400">
                                            Everything.
                                        </span>

                                    </h1>

                                    <p className="mt-8 max-w-md text-lg leading-9 text-gray-400">

                                        Access your secure dashboard to manage projects,
                                        skills, blogs, experience, messages and analytics
                                        from one modern workspace.

                                    </p>

                                </div>

                            </div>

                            {/* DASHBOARD MOCKUP */}

                            <div className="relative mt-12">

                                {/* Glow */}

                                <div className="absolute inset-0 rounded-full bg-yellow-500/10 blur-[90px]" />

                                <div
                                    className="
                  relative
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#0f0f0f]
                  p-6
                  shadow-2xl
                "
                                >

                                    {/* Browser */}

                                    <div className="mb-6 flex items-center gap-2">

                                        <div className="h-3 w-3 rounded-full bg-red-400" />

                                        <div className="h-3 w-3 rounded-full bg-yellow-400" />

                                        <div className="h-3 w-3 rounded-full bg-green-400" />

                                    </div>

                                    {/* Top Cards */}

                                    <div className="grid grid-cols-3 gap-4">

                                        <div className="rounded-2xl border border-white/5 bg-[#181818] p-4">

                                            <div className="h-3 w-14 rounded bg-yellow-400/40" />

                                            <div className="mt-5 h-8 w-20 rounded bg-yellow-400/20" />

                                        </div>

                                        <div className="rounded-2xl border border-white/5 bg-[#181818] p-4">

                                            <div className="h-3 w-12 rounded bg-yellow-400/40" />

                                            <div className="mt-5 h-8 w-16 rounded bg-yellow-400/20" />

                                        </div>

                                        <div className="rounded-2xl border border-white/5 bg-[#181818] p-4">

                                            <div className="h-3 w-16 rounded bg-yellow-400/40" />

                                            <div className="mt-5 h-8 w-20 rounded bg-yellow-400/20" />

                                        </div>

                                    </div>

                                    {/* Chart */}

                                    <div className="mt-6 rounded-2xl border border-white/5 bg-[#181818] p-5">

                                        <div className="mb-5 h-3 w-32 rounded bg-yellow-400/40" />

                                        <div className="flex h-40 items-end justify-between gap-3">

                                            <div className="h-12 w-full rounded-t bg-yellow-500/30" />

                                            <div className="h-24 w-full rounded-t bg-yellow-500/50" />

                                            <div className="h-20 w-full rounded-t bg-yellow-500/40" />

                                            <div className="h-32 w-full rounded-t bg-yellow-500/70" />

                                            <div className="h-16 w-full rounded-t bg-yellow-500/30" />

                                            <div className="h-36 w-full rounded-t bg-yellow-500" />

                                        </div>

                                    </div>

                                    {/* Bottom */}

                                    <div className="mt-6 grid grid-cols-4 gap-3">

                                        {Array.from({ length: 4 }).map((_, index) => (
                                            <div
                                                key={index}
                                                className="h-16 rounded-xl border border-white/5 bg-[#181818]"
                                            />
                                        ))}

                                    </div>

                                </div>

                                {/* Laptop Base */}

                                <div className="mx-auto h-3 w-[92%] rounded-full bg-[#2d2d2d]" />

                            </div>

                        </div>

                        {/* ====================================================== */}
                        {/* RIGHT SECTION */}
                        {/* ====================================================== */}

                        <div className="flex items-center justify-center p-8 lg:p-16">

                            <div className="w-full max-w-md">

                                <div className="mb-12 text-center lg:text-left">

                                    <span className="rounded-full border border-yellow-400/20 bg-yellow-500/10 px-4 py-2 text-sm uppercase tracking-[4px] text-yellow-400">
                                        Welcome Back
                                    </span>

                                    <h1 className="mt-6 text-5xl font-black leading-tight">
                                        Sign In
                                    </h1>

                                    <p className="mt-5 text-gray-400 leading-8">
                                        Login to continue managing your portfolio dashboard.
                                    </p>

                                </div>

                                {/* ===== Part 2 starts here ===== */}

                                {/* ================= EMAIL ================= */}

                                <div className="space-y-6">

                                    <div>

                                        <label className="mb-3 block text-sm font-medium text-gray-300">
                                            Email Address
                                        </label>

                                        <div className="group flex h-16 items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 transition-all duration-300 hover:border-yellow-400/30 focus-within:border-yellow-400 focus-within:bg-white/[0.05]">

                                            <FiMail className="text-xl text-yellow-400 transition group-focus-within:scale-110" />

                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="ml-4 h-full w-full bg-transparent text-white placeholder:text-gray-500 outline-none"
                                            />

                                        </div>

                                    </div>

                                    {/* ================= PASSWORD ================= */}

                                    <div>

                                        <label className="mb-3 block text-sm font-medium text-gray-300">
                                            Password
                                        </label>

                                        <div className="group flex h-16 items-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 transition-all duration-300 hover:border-yellow-400/30 focus-within:border-yellow-400 focus-within:bg-white/[0.05]">

                                            <FiLock className="text-xl text-yellow-400 transition group-focus-within:scale-110" />

                                            <input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="••••••••••"
                                                className="ml-4 h-full w-full bg-transparent text-white placeholder:text-gray-500 outline-none"
                                            />

                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="text-gray-400 transition hover:text-yellow-400"
                                            >
                                                {showPassword ? (
                                                    <FiEyeOff size={20} />
                                                ) : (
                                                    <FiEye size={20} />
                                                )}
                                            </button>

                                        </div>

                                    </div>

                                </div>

                                {/* ================= OPTIONS ================= */}

                                <div className="mt-6 flex items-center justify-between">

                                    <label className="flex cursor-pointer items-center gap-3">

                                        <input
                                            type="checkbox"
                                            className="h-4 w-4 accent-yellow-400"
                                        />

                                        <span className="text-sm text-gray-400">
                                            Remember me
                                        </span>

                                    </label>

                                    <button className="text-sm text-yellow-400 transition hover:text-yellow-300">
                                        Forgot Password?
                                    </button>

                                </div>

                                {/* ================= LOGIN BUTTON ================= */}

                                <button
                                    className="
                  group
                  relative
                  mt-10
                  flex
                  h-16
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  bg-gradient-to-r
                  from-yellow-400
                  via-yellow-500
                  to-amber-500
                  font-semibold
                  text-black
                  shadow-[0_10px_35px_rgba(255,193,7,.35)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_15px_45px_rgba(255,193,7,.5)]
                "
                                >

                                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-full" />

                                    <FiShield className="mr-3 text-xl" />

                                    Sign In

                                </button>

                                {/* ================= DIVIDER ================= */}

                                <div className="my-8 flex items-center gap-4">

                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

                                    <span className="text-sm text-gray-500">
                                        OR
                                    </span>

                                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

                                </div>

                                {/* ================= DEMO BUTTON ================= */}

                                <button
                                    className="
                  h-16
                  w-full
                  rounded-2xl
                  border
                  border-yellow-500/30
                  bg-white/[0.03]
                  font-medium
                  text-yellow-400
                  transition-all
                  duration-300
                  hover:border-yellow-400
                  hover:bg-yellow-500/10
                "
                                >
                                    Login as Demo
                                </button>

                                {/* ================= FOOTER ================= */}

                                <p className="mt-10 text-center text-sm text-gray-500 lg:text-left">
                                    © 2026 Portfolio Admin. Crafted with React & Tailwind CSS.
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