import React, { useEffect } from "react";
import { FiArrowRight, FiEdit2, FiStar, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { useDispatch, useSelector } from "react-redux"
import { getAllProjects } from "../features/projectSlice";

const Projects = () => {
    const dispatch = useDispatch();
    const { projects, loading, error } = useSelector(
        (state) => state.project
    )
    useEffect(() => {
        dispatch(getAllProjects())
    }, [dispatch])
    return (
        <>
            <section className="bg-[#111111] border border-[#2A2112] rounded-lg py-4 px-6">
                <div className="flex items-center justify-between border-b border-[#2A2112] pb-4">
                    <div className="flex items-center">
                        <div className="w-[3px] h-6 rounded-full bg-[#D4AF37] me-2"></div>
                        <h4 className="text-[#f5f5f5] text-lg">Recent Projects</h4>
                    </div>
                    <Link to="" className="text-[#f5f5f5] border border-[#2A2112] flex items-center gap-2 py-2 px-4 rounded-md">View All <span className="text-[#F4C84A]"><FiArrowRight /></span></Link>
                </div>

                <div>
                    <div className="flex justify-between gap-4 py-3">
                        <div className="w-[420px]">
                            <h5 className="text-[#F4C84A]">PROJECT</h5>
                        </div>
                        <div className="w-[350px]">
                            <h5 className="text-[#F4C84A]">TECHNOLOGIES</h5>
                        </div>
                        <div className="w-[150px]">
                            <h5 className="text-[#F4C84A]">FEATURED</h5>
                        </div>
                        <div className="w-[150px]">
                            <h5 className="text-[#F4C84A]">CREATED AT</h5>
                        </div>
                        <div className="w-[150px]">
                            <h5 className="text-[#F4C84A]">ACTIONS</h5>
                        </div>
                    </div>
                    {/* Project rows */}
                    {projects.map((item) => {
                        <div key={item._id} className="flex justify-between items-center gap-4 py-3 bg-[#090909] border-t border-b border-[#2A2112]">
                            <div className="w-[420px] flex gap-3">
                                <div className="max-w-[80px] w-full h-[68px]">
                                    <img src={item.image} alt="" className="w-full h-full object-fit" />
                                </div>
                                <div>
                                    <h6 className="text-[#f5f5f5] text-lg">{item.title}</h6>
                                    <p className="text-[#B3B3B3] text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="w-[350px] flex gap-3 items-center overflow-x-auto">
                                <div className="py-2 px-4 border border-[#22D3EE] text-[#67E8F9] w-fit rounded-md text-xs">{item.technologies}</div>
                                {/* <div className="py-2 px-4 border border-[#4ADE80] text-[#86EFAC] w-fit rounded-md text-xs">Node js</div>
                                <div className="py-2 px-4 border border-[#65A30D] text-[#A3E635] w-fit rounded-md text-xs">Mongo DB</div> */}
                            </div>
                            <div className="w-[150px] flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full border border-[#F4C84A] flex justify-center items-center text-[#F4C84A] text-xs"><FiStar /></div>
                                <p className="text-[#f5f5f5] text-sm">{item.featured}</p>
                            </div>
                            <div className="w-[150px]">
                                <p className="text-[#f5f5f5] text-sm">March, 2026</p>
                            </div>
                            <div className="w-[150px] flex gap-3">
                                <button type="button" className="border border-[#F4C84A] w-6 h-6 rounded flex justify-center items-center text-[#F4C84A] text-xs"><FiEdit2 /></button>
                                <button type="button" className="border border-red-600 w-6 h-6 rounded flex justify-center items-center text-red-600 text-xs"><FiTrash2 /></button>
                            </div>
                        </div>
                    })}
                </div>

            </section>
        </>
    )
}

export default Projects