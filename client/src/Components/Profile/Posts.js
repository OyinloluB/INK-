import React, { Fragment, useContext } from "react";
import PostItem from "./PostItem";
import PostContext from "../../context/Post/postContext";

const Posts = () => {
  const postContext = useContext(PostContext);
  const { posts } = postContext;

  return (
    <Fragment>
      {posts.map((eachPost) => (
        <PostItem key={eachPost.id} eachPost={eachPost} />
      ))}
    </Fragment>
  );
};

export default Posts;
