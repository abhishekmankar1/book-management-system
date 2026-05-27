import { useEffect, useState } from "react";
import API from "../services/api";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await API.get("/");
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await API.delete(`/${id}`);
      fetchBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 text-black dark:text-white">
      <SearchBar search={search} setSearch={setSearch} />

      {filteredBooks.length === 0 ? (
        <h1 className="text-center text-2xl font-bold mt-10">
          No Books Found
        </h1>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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