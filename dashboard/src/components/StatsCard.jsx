import React from "react";
import { FiBriefcase, FiCalendar, FiStar } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";

const StatsCard = () => {
    return (
        <>
            <div className="flex gap-6 overflow-x-auto">
                <div className="bg-[#151515] flex gap-4 border border-[#2A2112] rounded-xl md:py-10 py-8 md:px-8 px-6 grow min-w-[270px]">
                    <div className="w-16 h-16 rounded-full flex justify-center items-center text-[#F4C84A] bg-[#5c5033] text-3xl flex-shrink-0"><FiBriefcase /></div>
                    <div className="space-y-2">
                        <p className="text-[#f5f5f5]">Total Projects</p>
                        <p className="text-[#f5f5f5] text-3xl">8</p>
                        <p className="text-[#B3B3B3] text-sm">All time projects</p>
                    </div>
                </div>
                <div className="bg-[#151515] flex gap-4 border border-[#2A2112] rounded-xl md:py-10 py-8 md:px-8 px-6 grow min-w-[270px]">
                    <div className="w-16 h-16 rounded-full flex justify-center items-center text-[#F4C84A] bg-[#5c5033] text-3xl flex-shrink-0"><FiStar /></div>
                    <div className="space-y-2">
                        <p className="text-[#f5f5f5]">Featured Projects</p>
                        <p className="text-[#f5f5f5] text-3xl">6</p>
                        <p className="text-[#B3B3B3] text-sm">Highlighted projects</p>
                    </div>
                </div>
                <div className="bg-[#151515] flex gap-4 border border-[#2A2112] rounded-xl md:py-10 py-8 md:px-8 px-6 grow min-w-[270px]">
                    <div className="w-16 h-16 rounded-full flex justify-center items-center text-[#F4C84A] bg-[#5c5033] text-3xl flex-shrink-0"><BsCodeSlash /></div>
                    <div className="space-y-2">
                        <p className="text-[#f5f5f5]">Total Skills</p>
                        <p className="text-[#f5f5f5] text-3xl">15</p>
                        <p className="text-[#B3B3B3] text-sm">Unique technologies</p>
                    </div>
                </div>
                <div className="bg-[#151515] flex gap-4 border border-[#2A2112] rounded-xl md:py-10 py-8 md:px-8 px-6 grow min-w-[270px]">
                    <div className="w-16 h-16 rounded-full flex justify-center items-center text-[#F4C84A] bg-[#5c5033] text-3xl flex-shrink-0"><FiCalendar /></div>
                    <div className="space-y-2">
                        <p className="text-[#f5f5f5]">Total Views</p>
                        <p className="text-[#f5f5f5] text-3xl">100</p>
                        <p className="text-[#B3B3B3] text-sm">Across all projects</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatsCard