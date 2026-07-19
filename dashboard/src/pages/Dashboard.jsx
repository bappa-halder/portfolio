import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {

    return (
        <>
            <div className="px-8 space-y-6">
                <Navbar />
                <StatsCard />
                <Projects />
            </div>
        </>
    );
};

export default Dashboard;