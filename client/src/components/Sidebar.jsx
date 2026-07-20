import { FaHome, FaFileAlt, FaPlus, FaUser, FaSignOutAlt } from "react-icons/fa";
function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-6">

      <h1 className="text-3xl font-bold mb-10">
        SyncDoc
      </h1>

      <ul className="space-y-6">

       <li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
  <FaHome />
  <span>Dashboard</span>
</li>

<li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
  <FaFileAlt />
  <span>My Documents</span>
</li>

<li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
  <FaPlus />
  <span>Create Document</span>
</li>

<li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
  <FaUser />
  <span>Profile</span>
</li>

<li className="flex items-center gap-3 cursor-pointer hover:text-gray-200">
  <FaSignOutAlt />
  <span>Logout</span>
</li>

      </ul>

    </div>
  );
}

export default Sidebar;