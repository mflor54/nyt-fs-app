import React from "react";
import { Link } from "react-router-dom";

import "./FavoritesComponent.css";

const FavoritesComponent = ({ favorites, removeFromSaved }) => {
  return (
    <React.Fragment>
      <div className="link-back">
        <Link to="/" className="link">
          Back
        </Link>
      </div>
      <h1>Bookmarked</h1>
      <div className="favorites-list">
        {favorites.map((article, i) => {
          return (
            <div key={i} className="favorite-article">
              <a href={`${article.web_url}`}>{article.headline.main}</a>
              <div
                className="favorites-remove-btn"
                onClick={() => removeFromSaved(article)}
              >
                Remove
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default FavoritesComponent;
