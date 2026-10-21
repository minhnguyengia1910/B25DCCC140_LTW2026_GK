import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../data";

const AddBook = ({ onAdd }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]); 
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || author.trim() === "" || year === "") {
      setMessage("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const namSo = Number(year);
    if (!Number.isInteger(namSo) || namSo < 1900 || namSo > 2026) {
      setMessage("Năm xuất bản phải từ 1900 đến 2026");
      return;
    }

    onAdd({ title: title.trim(), author: author.trim(), year: namSo, category });
    navigate("/books", { replace: true });
  };

  return (
    <div>
      <h1>Thêm sách mới</h1>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title">Tên sách</label>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="author">Tác giả</label>
          <input id="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="year">Năm xuất bản</label>
          <input id="year" type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="form-category">Thể loại</label>
          <select id="form-category" value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Thêm</button>
        {message && <p className="form-error">{message}</p>}
      </form>
    </div>
  );
};

export default AddBook;
