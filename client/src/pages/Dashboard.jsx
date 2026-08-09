function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

export default Dashboard;import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../components/DashboardCards";
import RecentDocuments from "../components/RecentDocuments";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Topbar */}
        <Topbar />

        {/* Dashboard Cards */}
        <div className="mt-6">
          <DashboardCards />
        </div>

        {/* Recent Documents */}
        <div className="mt-6">
          <RecentDocuments />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;