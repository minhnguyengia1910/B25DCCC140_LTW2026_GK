import React from "react";

const Home = ({ books }) => {
  const tongSo = books.length;
  const dangMuon = books.reduce((dem, b) => (b.available ? dem : dem + 1), 0);
  const namMoiNhat = books.reduce((max, b) => (b.year > max ? b.year : max), 0);

  return (
    <div>
      <h1>Thư viện sách</h1>
      <p className="subtitle">Chào mừng bạn đến với thư viện khoa 👋</p>
      <div className="stats">
        <div className="stat-card">
          <span className="stat-icon">📖</span>
          <p>{`Tổng số sách: ${tongSo}`}</p>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🤝</span>
          <p>{`Số sách đang cho mượn: ${dangMuon}`}</p>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🗓️</span>
          <p>{`Năm xuất bản mới nhất: ${namMoiNhat}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
