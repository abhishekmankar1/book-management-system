import { Link } from "react-router-dom";

function BookCard({ book, deleteBook }) {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow-md p-5">
      <h2 className="text-2xl font-bold mb-2">
        {book.title}
      </h2>

      <p className="mb-1">
        <strong>Author:</strong> {book.author}
      </p>

      <p className="mb-1">
        <strong>Genre:</strong> {book.genre}
      </p>

      <p className="mb-4">
        <strong>Year:</strong> {book.year}
      </p>

      <div className="flex gap-3">
        <Link
          to={`/edit/${book.id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
        >
          Edit
        </Link>

        <button
          onClick={() => deleteBook(book.id)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;