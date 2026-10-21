import React, { useState, useEffect } from "react";
import FilterBar from "../components/FilterBar";
import BookTable from "../components/BookTable";

const BookList = ({ books, onToggle, onDelete }) => {
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const [category, setCategory] = useState("Tất cả");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 500);

    return () => clearTimeout(timer);
  }, [keyword]);

  const handleQueryShift = (e) => {
    setKeyword(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const tuKhoa = debouncedKeyword.trim().toLowerCase();
  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(tuKhoa) &&
      (category === "Tất cả" || b.category === category)
  );

  const searching = keyword !== debouncedKeyword;

  return (
    <div>
      <h1>Danh sách sách</h1>
      <FilterBar
        keyword={keyword}
        onKeywordChange={handleQueryShift}
        category={category}
        onCategoryChange={handleCategoryChange}
        searching={searching}
      />
      <p className="count">{`Tìm thấy ${filtered.length} cuốn sách`}</p>
      <BookTable books={filtered} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
};

export default BookList;
