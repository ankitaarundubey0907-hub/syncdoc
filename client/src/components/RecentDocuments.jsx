import { useEffect, useState } from "react";
import API from "../services/api";

function RecentDocuments() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await API.get("/documents");
        const data = response.data?.data || [];
        setDocuments(data);
      } catch (error) {
        console.log("Recent documents error:", error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">
        Recent Documents
      </h2>

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
          {documents.length > 0 ? (
            documents.map((doc, index) => (
              <tr
                key={doc._id || index}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-4">
                  {doc.title || doc.name || "Untitled Document"}
                </td>

                <td>
                  {doc.owner?.username || doc.owner?.email || "You"}
                </td>

                <td>
                  {doc.updatedAt
                    ? new Date(doc.updatedAt).toLocaleDateString()
                    : "-"}
                </td>

                <td>
                  {doc.isPublic ? "Shared" : "Private"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-8 text-center text-gray-500">
                No documents found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecentDocuments;
