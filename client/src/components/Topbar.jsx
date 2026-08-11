function Topbar() {
  return (
    <div className="flex justify-between items-center bg-white shadow-sm p-6 rounded-lg">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search documents..."
          className="border rounded-lg px-4 py-2 w-72 outline-none"
        />

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Profile
        </button>

      </div>

    </div>
  );
}

export default Topbar;