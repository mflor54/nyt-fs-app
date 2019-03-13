import React from "react";
import { Link } from "react-router-dom";
import "./SearchBarComponent.css";

export const SearchBarComponent = ({ fetchArticles, searchChange }) => {
  return (
    <div className="searchbar-wrapper">
      <div className="link-to-favorites">
        <Link to="/favorites" className="link">
          Bookmarks
        </Link>
      </div>
      <h1>New York Times Article Search</h1>
      <input
        type="text"
        placeholder="Search articles in science or politics"
        onChange={searchChange}
        className="searchbar"
      />
      <button
        className="search-btn"
        type="submit"
        onClick={() => fetchArticles()}
      >
        GO
      </button>
    </div>
  );
};
