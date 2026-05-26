import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import API from "../services/api";

function EditBook() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  // Fetch Single Book
  const fetchBook = async () => {
    try {
      const response = await API.get(`/books/${id}`);

      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

// eslint-disable-next-line
useEffect(() => {
  fetchBook();
}, []);

  // Handle Input Change
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  // Update Book
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/books/${id}`, book);

      alert("Book Updated Successfully ✅");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-gray-800 dark:text-white shadow-lg rounded-xl p-8 transition duration-300">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Edit Book
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={book.author}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={book.genre}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="number"
          name="year"
          placeholder="Publication Year"
          value={book.year}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Update Book
        </button>
      </form>
    </div>
  );
}

export default EditBook;