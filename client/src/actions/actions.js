const axios = require("axios");

export const REQUEST_ARTICLES = "REQUEST_ARTICLES";
export const REQUEST_ARTICLES_SUCCESS = "REQUEST_ARTICLES_SUCCESS";
export const REQUEST_ARTICLES_FAILED = "REQUEST_ARTICLES_FAILED";

export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";

export const ADD_TO_SAVED = "ADD_TO_SAVED";
export const REMOVE_FROM_SAVED = "REMOVE_FROM_SAVED";

export const SEARCH_OFF_HASHTAG = "SEARCH_OFF_HASHTAG";
export const UPDATE_SEARCH = "UPDATE_SEARCH";

/**
 * @function fetchArticles - fetch NYT articles based off user input
 * @returns {} - JSON object with status, articles, etc
 */

export const fetchArticles = () => (dispatch, getState) => {
  const searchValue = getState().search.searchField;

  let url =
    process.env.NODE_ENV === "production"
      ? `https://peaceful-beach-41588.herokuapp.com/api/articles${searchValue}`
      : `http://localhost:8080/api/articles/${searchValue}`;

  dispatch({ type: REQUEST_ARTICLES });

  axios
    .get(url)
    .then(res => {
      console.log("This is response:", res.data);
      dispatch({ type: REQUEST_ARTICLES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("This is err:", err);
      dispatch({ type: REQUEST_ARTICLES_FAILED, payload: err });
    });
};

/**
 * @function fetchBasedOffHashtag - fetch NYT articles based off hashtag clickedo
 * @returns {} - JSON object with status, articles, etc
 */

export const fetchBasedOffHashtag = hashtag => dispatch => {
  let url =
    process.env.NODE_ENV === "production"
      ? `https://peaceful-beach-41588.herokuapp.com/api/hashtags/${hashtag}`
      : `http://localhost:8080/api/hashtags/${hashtag}`;

  dispatch({ type: REQUEST_ARTICLES });

  axios
    .get(url)
    .then(res => {
      console.log("this is hashtags:", res.data);
      dispatch({ type: SEARCH_OFF_HASHTAG, payload: res.data });
      dispatch({ type: UPDATE_SEARCH, payload: hashtag });
    })
    .catch(err => {
      console.log("Hashtag err", err);
    });
};

export const searchChange = event => (dispatch, getState) => {
  dispatch({ type: CHANGE_SEARCH_FIELD, payload: event.target.value });
};

export const addToSaved = article => dispatch => {
  dispatch({ type: ADD_TO_SAVED, payload: article });
};

export const removeFromSaved = article => dispatch => {
  dispatch({ type: REMOVE_FROM_SAVED, payload: article });
};
