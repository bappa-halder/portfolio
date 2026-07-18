import { FiMenu, FiSearch } from "react-icons/fi";
const Navbar = ({ toggleSidebar }) => {

    return (
        <>
            <nav>
                <button type="button">
                    <FiMenu size={24} />
                </button>
                <div className="flex items-center gap-1 border py-1 px-1">
                    <button type="button"><FiSearch size={20} /></button>
                    <input type="search" className="border"/>
                </div>
            </nav>
            <div>
                <h1>Welcome back, Admin</h1>
                <p>Here's what's happening with your portfolio</p>
            </div>
        </>
    );
};

export default Navbar;