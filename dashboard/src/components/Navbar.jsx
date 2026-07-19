import { FiMenu, FiSearch } from "react-icons/fi";
const Navbar = ({ toggleSidebar }) => {

    return (
        <>
            <section>
                <nav className="flex justify-between py-3">
                    <button type="button" className="text-[#F5F5F5]">
                        <FiMenu size={24} />
                    </button>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 border-[#2A2112] rounded-md py-2 px-3 bg-black min-w-[300px]">
                            <button type="button" className="text-[#F5F5F5]"><FiSearch size={20} /></button>
                            <input type="search" placeholder="Search projects..." className="outline-none bg-transparent text-[#F5F5F5] w-full" />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border"></div>
                            <div>
                                <p className="text-[#F5F5F5] font-medium">Admin</p>
                                <p className="text-[#B3B3B3]">Administrator</p>
                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                    <h1 className="text-[#F5F5F5] text-3xl">Welcome back, Admin</h1>
                    <p className="text-[#B3B3B3] mt-1">Here's what's happening with your portfolio</p>
                </div>
            </section>
        </>
    );
};

export default Navbar;