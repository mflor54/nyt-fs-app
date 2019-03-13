import { ADD_TO_SAVED, REMOVE_FROM_SAVED } from "../actions/actions";

const initialState = {
  favorites: []
};

function savedReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_SAVED:
      return {
        favorites: [...state.favorites, action.payload]
      };
    case REMOVE_FROM_SAVED:
      return {
        favorites: state.favorites.filter(article => {
          return article.headline.main !== action.payload.headline.main;
        })
      };
    default:
      return state;
  }
}

export default savedReducer;
