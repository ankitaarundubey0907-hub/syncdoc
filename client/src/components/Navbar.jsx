import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-blue-600">
          SyncDoc
        </h1>

        <div className="flex gap-8 text-lg">

          <Link
            to="/"
            className="hover:text-blue-600 font-medium"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="hover:text-blue-600 font-medium"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Register
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;