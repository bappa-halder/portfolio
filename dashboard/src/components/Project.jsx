import React from "react";
import { FiEdit2, FiStar, FiTrash2 } from "react-icons/fi";

const Project = ({ project }) => {
    return (
        <>
            <div className="flex justify-between items-center gap-8 py-3 bg-[#090909] border-t border-b border-[#2A2112]">
                <div className="w-[420px] flex gap-3">
                    <div className="max-w-[80px] w-full h-[68px]">
                        <img src={project.image} alt="" className="w-full h-full object-fit" />
                    </div>
                    <div>
                        <h6 className="text-[#f5f5f5] text-lg">{project.title}</h6>
                        <p className="text-[#B3B3B3] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="w-[350px] flex gap-3 items-center overflow-x-auto">
                    {
                        project.technologies?.map((tech) => (
                            <div key={tech} className="py-2 px-4 border border-[#22D3EE] text-[#67E8F9] w-fit rounded-md text-xs whitespace-nowrap">{tech}</div>
                        ))
                    }
                    
                </div>
                <div className="w-[120px] flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border border-[#F4C84A] flex justify-center items-center text-[#F4C84A] text-xs"><FiStar /></div>
                    <p className="text-[#f5f5f5] text-sm">{project.featured ? "Yes" : "No"}</p>
                </div>
                <div className="w-[150px]">
                    <p className="text-[#f5f5f5] text-sm">March, 2026</p>
                </div>
                <div className="w-[150px] flex gap-3">
                    <button type="button" className="border border-[#F4C84A] w-6 h-6 rounded flex justify-center items-center text-[#F4C84A] text-xs"><FiEdit2 /></button>
                    <button type="button" className="border border-red-600 w-6 h-6 rounded flex justify-center items-center text-red-600 text-xs"><FiTrash2 /></button>
                </div>
            </div>
        </>
    )
}

export default Project