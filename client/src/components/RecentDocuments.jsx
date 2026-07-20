const documents = [
  {
    name: "Project.pdf",
    owner: "Hetvi",
    updated: "20 Jul 2026",
    status: "Shared",
  },
  {
    name: "Notes.docx",
    owner: "Keni",
    updated: "19 Jul 2026",
    status: "Private",
  },
  {
    name: "Report.pdf",
    owner: "Hetvi",
    updated: "18 Jul 2026",
    status: "Shared",
  },
];

function RecentDocuments() {
  return (
    <div className="bg-white rounded-xl shadow mt-8 p-6">
      <h2 className="text-2xl font-bold mb-6">Recent Documents</h2>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="py-3">Document</th>
            <th>Owner</th>
            <th>Last Updated</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {documents.map((doc, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-4">{doc.name}</td>
              <td>{doc.owner}</td>
              <td>{doc.updated}</td>
              <td>{doc.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentDocuments;