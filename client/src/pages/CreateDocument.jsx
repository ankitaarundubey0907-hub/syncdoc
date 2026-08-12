function CreateDocument() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

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
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
            Save Document
          </button>

          <button className="bg-gray-300 hover:bg-gray-400 px-6 py-3 rounded-lg">
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
}

export default CreateDocument;