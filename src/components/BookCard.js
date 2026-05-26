import { Link } from "react-router-dom";

function BookCard({ book, deleteBook }) {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-bold text-blue-700 mb-3">
        {book.title}
      </h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Author:</span>{" "}
          {book.author}
        </p>

        <p>
          <span className="font-semibold">Genre:</span>{" "}
          {book.genre}
        </p>

        <p>
          <span className="font-semibold">Year:</span>{" "}
          {book.year}
        </p>
      </div>

      <div className="flex gap-3 mt-5">
        <Link
          to={`/edit/${book.id}`}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
        >
          Edit
        </Link>

        <button
          onClick={() => deleteBook(book.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;