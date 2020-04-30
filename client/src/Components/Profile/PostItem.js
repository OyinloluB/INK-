import React from "react";

const PostItem = ({ eachPost }) => {
  const { id, name, post, type } = eachPost;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default PostItem;
