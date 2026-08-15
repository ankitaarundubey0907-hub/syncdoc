import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../components/DashboardCards";
import RecentDocuments from "../components/RecentDocuments";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <Topbar />

        <DashboardCards />
        <RecentDocuments />

      </div>

    </div>
  );
}

export default Dashboard;