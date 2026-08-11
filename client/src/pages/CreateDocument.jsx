import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function CreateDocument() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!title.trim()) {
      alert("Please enter document title");
      return;
    }

    try {
      await API.post("/documents", {
        title,
        content,
      });

      alert("Document saved successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message || "Failed to save document"
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

      <h1 className="text-3xl font-bold mb-8">
        Create New Document
      </h1>

      {/* Title */}

      <div className="mb-6">
        <label className="block mb-2 font-semibold">
          Document Title
        </label>

        <input
          type="text"
          placeholder="Enter document title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Content */}

      <div className="mb-8">
        <label className="block mb-2 font-semibold">
          Content
        </label>

        <textarea
          rows="12"
          placeholder="Write your document..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* Buttons */}

      <div className="flex gap-4">

        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Save Document
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-300 hover:bg-gray-400 px-6 py-3 rounded-lg"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}

export default CreateDocument;
