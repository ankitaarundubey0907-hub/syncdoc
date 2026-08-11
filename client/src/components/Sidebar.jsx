import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaPlus,
  FaUser,
  FaSignOutAlt,
} 
from "react-icons/fa";
function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        SyncDoc
      </h1>

    <ul className="space-y-3">

  <NavLink
    to="/dashboard"
    className={({ isActive }) =>
      `flex items-center gap-3 p-3 rounded-lg ${
        isActive ? "bg-blue-900" : "hover:bg-blue-600"
      }`
    }
  >
    <FaHome />
    <span>Dashboard</span>
  </NavLink>

  <NavLink
    to="/documents"
    className={({ isActive }) =>
      `flex items-center gap-3 p-3 rounded-lg ${
        isActive ? "bg-blue-900" : "hover:bg-blue-600"
      }`
    }
  >
    <FaFileAlt />
    <span>My Documents</span>
  </NavLink>

  <NavLink
    to="/create-document"
    className={({ isActive }) =>
      `flex items-center gap-3 p-3 rounded-lg ${
        isActive ? "bg-blue-900" : "hover:bg-blue-600"
      }`
    }
  >
    <FaPlus />
    <span>Create Document</span>
  </NavLink>

  <NavLink
    to="/profile"
    className={({ isActive }) =>
      `flex items-center gap-3 p-3 rounded-lg ${
        isActive ? "bg-blue-900" : "hover:bg-blue-600"
      }`
    }
  >
    <FaUser />
    <span>Profile</span>
  </NavLink>

  <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 w-full text-left">
    <FaSignOutAlt />
    <span>Logout</span>
  </button>

</ul>

    </div>
  );
}

export default Sidebar;