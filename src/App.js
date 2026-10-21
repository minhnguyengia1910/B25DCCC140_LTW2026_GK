const BUILD_TAG = "qf-2817";
/* eslint-disable import/first */
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import BookDetail from "./pages/BookDetail";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem("gk_books"));
    } catch (err) {
      saved = null; 
    }

    if (Array.isArray(saved)) {
      setBooks(saved);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    axios
      .get("/data/books.json", { signal: controller.signal })
      .then((res) => {
        if (!Array.isArray(res.data)) {
          setError("Không tải được dữ liệu");
        } else {
          setBooks(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return; 
        setError("Không tải được dữ liệu");
        setLoading(false);
      });

    
    return () => controller.abort();
  }, []);

  
  useEffect(() => {
    if (!loading && !error) {
      localStorage.setItem("gk_books", JSON.stringify(books));
    }
  }, [books, loading, error]);

  const addBook = (book) => {
    const maxId = books.reduce((max, b) => (b.id > max ? b.id : max), 0);
    setBooks([...books, { ...book, id: maxId + 1, available: true }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const toggleBook = (id) => {
    setBooks(books.map((b) => (b.id === id ? { ...b, available: !b.available } : b)));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout loading={loading} error={error} buildTag={BUILD_TAG} />}>
        <Route index element={<Home books={books} />} />
        <Route path="books" element={<BookList books={books} onToggle={toggleBook} onDelete={deleteBook} />} />
        <Route path="books/new" element={<AddBook onAdd={addBook} />} />
        <Route path="books/:id" element={<BookDetail books={books} />} />
      </Route>
    </Routes>
  );
};

export default App;
