import React, { useEffect } from "react";
import { FiArrowRight, FiEdit2, FiStar, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { useDispatch, useSelector } from "react-redux"
import { getAllProjects } from "../features/projectSlice";
import Project from "./Project";

const ProjectRow = () => {
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
                    <div className="flex justify-between gap-8 py-3">
                        <div className="w-[420px]">
                            <h5 className="text-[#F4C84A]">PROJECT</h5>
                        </div>
                        <div className="w-[350px]">
                            <h5 className="text-[#F4C84A]">TECHNOLOGIES</h5>
                        </div>
                        <div className="w-[120px]">
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
                    {projects.map((project) => (
                        <Project key={project._id} project={project} />
                    )
                    )}
                </div>

            </section>
        </>
    )
}

export default ProjectRow