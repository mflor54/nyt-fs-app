import { combineReducers } from "redux";
import resultsReducer from "./resultsReducer";
import searchReducer from "./searchReducer";
import savedReducer from "./savedReducer";

export default combineReducers({
  results: resultsReducer,
  search: searchReducer,
  bookmarked: savedReducer
});
