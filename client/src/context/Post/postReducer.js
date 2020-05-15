import {
  ADD_POST,
  GET_POST,
  DELETE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_POST,
  UPDATE_POST,
  CLEAR_FILTER,
  POST_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
