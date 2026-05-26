import { useEffect, useState } from "react";

import API from "../services/api";

import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  // Fetch Books
  const fetchBooks = async () => {
    try {
      const response = await API.get("/books");

      setBooks(response.data);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Delete Book
  const deleteBook = async (id) => {
    try {
      await API.delete(`/books/${id}`);

      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  // Search Filter
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 text-black dark:text-white transition duration-300">
      <SearchBar search={search} setSearch={setSearch} />

      {loading ? (
        <Loader />
      ) : filteredBooks.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-500">
            No Books Found 📚
          </h2>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              deleteBook={deleteBook}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;