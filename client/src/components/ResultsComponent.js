import React from "react";
import { parseDate } from "../utils/dateParser";
import "./ResultsComponent.css";

export const ResultsComponent = ({
  results,
  addToSaved,
  removeFromSaved,
  favorites,
  fetchBasedOffHashtag
}) => {
  return (
    <React.Fragment>
      {results.map((article, i) => (
        <div key={i} className="results-container">
          <h1 className="headline">{article.headline.main}</h1>
          <h3 className="author">{article.byline.original}</h3>
          <a
            className="section-name"
            href={`https://www.nytimes.com/section/${
              article.section_name === undefined
                ? ""
                : article.section_name.toLowerCase()
            }`}
          >
            <p>
              {article.section_name === undefined ? (
                <span />
              ) : (
                article.section_name
              )}
            </p>
          </a>
          <div className="results-content">
            <p className="content">{article.lead_paragraph}</p>
          </div>
          <p className="article-link">
            <a href={`${article.web_url}`}>Link to article</a>
          </p>
          <ul className="keywords-wrapper">
            {article.keywords.map((keyword, i) => {
              return (
                <li
                  key={i}
                  className="keyword"
                  onClick={() => fetchBasedOffHashtag(keyword.value)}
                >
                  #{keyword.value.trim()}{" "}
                </li>
              );
            })}
          </ul>
          <p className="published-date">{parseDate(article.pub_date)}</p>
          {/* Pull in favorites from state to determine if an article is already
          bookmarked or not, using array.find() method */}
          <span>
            {!favorites.find(
              fav => fav.headline.main === article.headline.main
            ) ? (
              <div className="ribbon-add" onClick={() => addToSaved(article)} />
            ) : (
              <div
                className="ribbon-remove"
                onClick={() => removeFromSaved(article)}
              />
            )}
          </span>
        </div>
      ))}
    </React.Fragment>
  );
};
