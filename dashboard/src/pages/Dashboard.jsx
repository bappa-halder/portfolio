import Navbar from "../components/Navbar";
import ProjectRow from "../components/ProjectRow";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {

    return (
        <>
            <div className="px-8 space-y-6">
                <Navbar />
                <StatsCard />
                <ProjectRow />
            </div>
        </>
    );
};

export default Dashboard;