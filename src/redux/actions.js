import { SET_SEARCH_VALUE } from "./actionTypes";
import { SET_RESULT_QUERY_LIST } from "./actionTypes";

export const setSearchValue = content => ({
  type: SET_SEARCH_VALUE,
  payload: {
    s: content
  }
});

export const setResultQueryList = content => ({
  type: SET_RESULT_QUERY_LIST,
  payload: {
    r: content
  }
});