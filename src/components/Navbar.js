import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-blue-600 dark:bg-gray-800 shadow-lg transition duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold text-white"
        >
          📚 Book Manager
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg font-semibold"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <Link
            to="/add"
            className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            + Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;