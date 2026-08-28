import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";

function MyDocuments() {
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  const fetchDocuments = async () => {
    try {
      const response = await API.get("/documents");
      setDocuments(response.data?.data || []);
    } catch (error) {
      console.log("Documents error:", error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleView = (id) => {
    navigate(`/documents/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/documents/${id}/edit`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/documents/${id}`);

      alert("Document deleted successfully!");

      setDocuments((currentDocuments) =>
        currentDocuments.filter((doc) => doc._id !== id)
      );
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message || "Failed to delete document"
      );
    }
  };

  return (
    <DashboardLayout>
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
            {documents.length > 0 ? (
              documents.map((doc) => (
                <tr
                  key={doc._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-4">
                    {doc.title}
                  </td>

                  <td>
                    {doc.updatedAt
                      ? new Date(doc.updatedAt).toLocaleDateString()
                      : "-"}
                  </td>

                  <td>
                    {doc.isPublic ? "Shared" : "Private"}
                  </td>

                  <td className="space-x-2">
                    <button
                      onClick={() => handleView(doc._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      View
                    </button>

                    <button
                      onClick={() => handleEdit(doc._id)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(doc._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="py-8 text-center text-gray-500"
                >
                  No documents found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default MyDocuments;
