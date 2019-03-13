import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromSaved } from "../actions/actions";
import FavoritesComponent from "../components/FavoritesComponent";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { favorites, removeFromSaved } = this.props;

    return (
      <div className="favorites-container">
        <FavoritesComponent
          favorites={favorites}
          removeFromSaved={removeFromSaved}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.bookmarked.favorites
});

export default connect(
  mapStateToProps,
  { removeFromSaved }
)(Favorites);
