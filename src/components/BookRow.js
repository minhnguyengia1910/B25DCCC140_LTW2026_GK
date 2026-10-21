import React from "react";
import { Link } from "react-router-dom";

const BookRow = ({ book, onToggle, onDelete }) => {
  const { id, title, author, year, category, available } = book;

  return (
    <tr className={available ? "" : "row-borrowed"}>
      <td><Link to={`/books/${id}`}>{title}</Link></td>
      <td>{author}</td>
      <td>{year}</td>
      <td>{category}</td>
      <td>
        <span className={available ? "badge badge-ok" : "badge badge-borrowed"}>
          {available ? "Có sẵn" : "Đang mượn"}
        </span>
      </td>
      <td className="actions">
        <button className="btn btn-primary" onClick={() => onToggle(id)}>
          {available ? "Cho mượn" : "Nhận trả"}
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>Xóa</button>
      </td>
    </tr>
  );
};

export default BookRow;
