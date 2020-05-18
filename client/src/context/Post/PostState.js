import React, { useReducer } from "react";
import axios from "axios";
import postContext from "./postContext";
import postReducer from "./postReducer";
import {
  ADD_POST,
  DELETE_POST,
  GET_POST,
  CLEAR_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_POST,
  UPDATE_POST,
  CLEAR_FILTER,
  POST_ERROR,
} from "../types";

const PostState = (props) => {
  const initialState = {
    posts: [],
    error: null,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  //Get Post
  const getPosts = async () => {
    try {
      const res = await axios.get(
        "https://writewithink.herokuapp.com/api/posts"
      );

      dispatch({
        type: GET_POST,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload: error.response ? error.response.data.msg : error.msg,
      });
    }
  };

  //Add Post
  const addPost = async (post) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "https://writewithink.herokuapp.com/api/posts",
        post,
        config
      );

      dispatch({ type: ADD_POST, payload: res.data });
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload: error.response ? error.response.data.msg : error.msg,
      });
    }
  };

  //Delete Post
  const deletePost = async (id) => {
    try {
      const res = await axios.delete(
        `https://writewithink.herokuapp.com/api/posts/${id}`
      );

      dispatch({
        type: DELETE_POST,
        payload: id,
      });
    } catch (error) {
      dispatch({ type: POST_ERROR, payload: error.response.msg });
    }
  };

  //Set Current Post

  //Clear Current Post

  //Update Post

  //Filter Post

  //Clear Filter

  return (
    <postContext.Provider
      value={{
        posts: state.posts,
        error: state.error,
        addPost,
        deletePost,
        getPosts,
      }}
    >
      {props.children}
    </postContext.Provider>
  );
};

export default PostState;
