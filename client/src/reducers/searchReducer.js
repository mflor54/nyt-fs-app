import { CHANGE_SEARCH_FIELD, UPDATE_SEARCH } from "../actions/actions";

const initialState = {
  searchField: ""
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        searchField: action.payload
      };
    case UPDATE_SEARCH:
      return {
        searchField: action.payload
      };
    default:
      return state;
  }
}

export default searchReducer;
