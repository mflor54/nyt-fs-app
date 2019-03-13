import {
  REQUEST_ARTICLES,
  REQUEST_ARTICLES_FAILED,
  REQUEST_ARTICLES_SUCCESS,
  SEARCH_OFF_HASHTAG
} from "../actions/actions";

const initialState = {
  articles: [],
  isFetching: false,
  errorFetching: false,
  errorMessage: undefined
};

function resultsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        isFetching: true,
        errorFetching: false
      };
    case REQUEST_ARTICLES_SUCCESS:
      return {
        articles: action.payload.response.docs,
        isFetching: false,
        errorFetching: false
      };
    case REQUEST_ARTICLES_FAILED:
      return {
        isFetching: false,
        errorFetching: true,
        errorMessage: action.payload
      };
    case SEARCH_OFF_HASHTAG:
      return {
        articles: action.payload.response.docs,
        isFetching: false,
        errorFetching: false
      }
    default:
      return state;
  }
}

export default resultsReducer;
