import React, { useReducer } from "react";
import uuid from "uuid";
import postContext from "./postContext";
import postReducer from "./postReducer";
import {
  ADD_POST,
  DELETE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_POST,
  UPDATE_POST,
  CLEAR_FILTER,
} from "../types";

const PostState = (props) => {
  const initialState = {
    posts: [
      {
        id: 1,
        name: "John Doe",
        post: "Some text",
        type: "public",
      },
      {
        id: 1,
        name: "John Doe",
        post: "Some text",
        type: "public",
      },
      {
        id: 1,
        name: "John Doe",
        post: "Some text",
        type: "public",
      },
    ],
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  //Add Post

  //Delete Post

  //Set Current Post

  //Clear Current Post

  //Update Post

  //Filter Post

  //Clear Filter

  return (
    <postContext.Provider
      value={{
        posts: state.posts,
      }}
    >
      {props.children}
    </postContext.Provider>
  );
};

export default PostState;
