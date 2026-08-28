import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function ViewDocument() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await API.get(`/documents/${id}`);
        setDocument(response.data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDocument();
  }, [id]);

  if (!document) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {document.title}
        </h1>

        <div className="border rounded-lg p-6 min-h-64 whitespace-pre-wrap break-words">
          {document.content || "No content available."}
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => navigate("/documents")}
            className="bg-gray-300 hover:bg-gray-400 px-6 py-3 rounded-lg"
          >
            Back
          </button>

          <button
            onClick={() => navigate(`/documents/${id}/edit`)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDocument;
