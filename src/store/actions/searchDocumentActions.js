import { SET_SEARCH_DOC_INPUT } from "./types";

// set search input
export const setSearchInput = data => dispatch => {
  dispatch({
    type: SET_SEARCH_DOC_INPUT,
    payload: data
  });
};
