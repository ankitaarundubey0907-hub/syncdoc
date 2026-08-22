import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";
import socket from "../services/socket";

function EditDocument() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await API.get(`/documents/${id}`);
        const document = response.data?.data;

        setTitle(document?.title || "");
        setContent(document?.content || "");
      } catch (error) {
        console.log(error);
      }
    };

    fetchDocument();

    // Join the document's Socket.IO room
    socket.emit("join-document", id);

    // Receive changes from other users
    const handleDocumentUpdate = ({ title, content }) => {
      setTitle(title);
      setContent(content);
    };

    socket.on("document-update", handleDocumentUpdate);

    // Remove listener when leaving the page
    return () => {
      socket.off("document-update", handleDocumentUpdate);
    };
  }, [id]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;

    setTitle(newTitle);

    socket.emit("document-change", {
      documentId: id,
      title: newTitle,
      content,
    });
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;

    setContent(newContent);

    socket.emit("document-change", {
      documentId: id,
      title,
      content: newContent,
    });
  };

  const handleUpdate = async () => {
    try {
      await API.put(`/documents/${id}`, {
        title,
        content,
      });

      alert("Document updated successfully!");
      navigate("/documents");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Failed to update document"
      );
    }
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Edit Document
        </h1>

        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Document Title
          </label>

          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-8">
          <label className="block mb-2 font-semibold">
            Content
          </label>

          <textarea
            rows="12"
            value={content}
            onChange={handleContentChange}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleUpdate}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Update Document
          </button>

          <button
            onClick={() => navigate("/documents")}
            className="bg-gray-300 hover:bg-gray-400 px-6 py-3 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditDocument;