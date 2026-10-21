import React from "react";
import { CATEGORIES } from "../data";

const FilterBar = ({ keyword, onKeywordChange, category, onCategoryChange, searching }) => (
  <div className="filter-bar">
    <div className="field">
      <label htmlFor="search">Tìm kiếm</label>
      <input
        id="search"
        type="text"
        placeholder="Nhập tên sách..."
        value={keyword}
        onChange={onKeywordChange}
      />
      {searching && <span className="searching">Đang tìm...</span>}
    </div>
    <div className="field">
      <label htmlFor="category">Thể loại</label>
      <select id="category" value={category} onChange={onCategoryChange}>
        <option value="Tất cả">Tất cả</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  </div>
);

export default FilterBar;
