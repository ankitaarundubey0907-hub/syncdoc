import DashboardLayout from "../layouts/DashboardLayout";
function MyDocuments() {
  const documents = [
    {
      id: 1,
      title: "Project Report",
      updated: "22 Jul 2026",
      status: "Shared",
    },
    {
      id: 2,
      title: "MCA Notes",
      updated: "21 Jul 2026",
      status: "Private",
    },
    {
      id: 3,
      title: "Internship Tasks",
      updated: "20 Jul 2026",
      status: "Shared",
    },
  ];

  return (

  <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">My Documents</h1>

      <div className="bg-white rounded-xl shadow-md p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="py-3">Title</th>
              <th>Last Updated</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-b hover:bg-gray-50">
                <td className="py-4">{doc.title}</td>
                <td>{doc.updated}</td>
                <td>{doc.status}</td>
                <td className="space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    View
                  </button>

                  <button className="bg-green-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default MyDocuments;