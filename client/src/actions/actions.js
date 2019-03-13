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
  dispatch({ type: REQUEST_ARTICLES });
  fetch(`http://localhost:8080/api/articles/${searchValue}`)
    .then(res => res.json())
    .then(articles =>
      dispatch({ type: REQUEST_ARTICLES_SUCCESS, payload: articles })
    )
    .catch(err => dispatch({ type: REQUEST_ARTICLES_FAILED, payload: err }));
};

/**
 * @function fetchBasedOffHashtag - fetch NYT articles based off hashtag clickedo
 * @returns {} - JSON object with status, articles, etc
 */

export const fetchBasedOffHashtag = hashtag => dispatch => {
  dispatch({ type: REQUEST_ARTICLES });
  fetch(`http://localhost:8080/api/hashtags/${hashtag}`)
    .then(res => res.json())
    .then(articles => {
      dispatch({ type: SEARCH_OFF_HASHTAG, payload: articles });
      dispatch({ type: UPDATE_SEARCH, payload: hashtag });
    })
    .catch(err => {
      console.log("ERROR HASHTAG SEARCH", err);
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
