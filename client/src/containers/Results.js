import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchBarComponent } from "../components/SearchBarComponent";
import { ResultsComponent } from "../components/ResultsComponent";
import {
  fetchArticles,
  searchChange,
  addToSaved,
  removeFromSaved,
  fetchBasedOffHashtag
} from "../actions/actions";

class Results extends Component {
  render() {
    const {
      results,
      fetchArticles,
      searchChange,
      addToSaved,
      removeFromSaved,
      favorites,
      fetchBasedOffHashtag
    } = this.props;
    return (
      <div className="results-wrapper">
        <SearchBarComponent
          fetchArticles={fetchArticles}
          searchChange={searchChange}
        />
        {results === undefined ? (
          <span />
        ) : (
          <ResultsComponent
            results={results}
            addToSaved={addToSaved}
            removeFromSaved={removeFromSaved}
            favorites={favorites}
            fetchBasedOffHashtag={fetchBasedOffHashtag}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.results.articles,
  search: state.search,
  favorites: state.bookmarked.favorites
});

export default connect(
  mapStateToProps,
  {
    fetchArticles,
    searchChange,
    addToSaved,
    removeFromSaved,
    fetchBasedOffHashtag
  }
)(Results);
