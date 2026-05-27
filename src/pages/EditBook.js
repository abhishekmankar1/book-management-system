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

 useEffect(() => {
  fetchBook();
}, [id]);

  const fetchBook = async () => {
    try {
      const res = await API.get(`/${id}`);
      setBook(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/${id}`, book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-gray-800 dark:text-white shadow-lg rounded-xl p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Edit Book
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg text-black"
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg text-black"
          required
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={book.genre}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg text-black"
          required
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          value={book.year}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg text-black"
          required
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
          Update Book
        </button>
      </form>
    </div>
  );
}

export default EditBook;