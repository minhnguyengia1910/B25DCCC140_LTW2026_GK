import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === Number(id));

  return (
    <div>
      <h1>Chi tiết sách</h1>
      {book ? (
        <div className="detail-card">
          <p>{`Tên sách: ${book.title}`}</p>
          <p>{`Tác giả: ${book.author}`}</p>
          <p>{`Năm xuất bản: ${book.year}`}</p>
          <p>{`Thể loại: ${book.category}`}</p>
          <p>{`Trạng thái: ${book.available ? "Có sẵn" : "Đang mượn"}`}</p>
        </div>
      ) : (
        <p className="empty">Không tìm thấy sách</p>
      )}
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default BookDetail;
