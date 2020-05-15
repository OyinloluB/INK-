import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import PostContext from "../../context/Post/postContext";

const PostItem = ({ eachPost }) => {
  const postContext = useContext(PostContext);
  const { deletePost } = postContext;

  const { id, name, title, subtitle, postText } = eachPost;

  const onDelete = () => {
    deletePost(id);
  };

  const popover = (
    <Popover style={{ padding: "15px" }}>
      <p style={{ display: "flex", justifyContent: "space-between" }}>
        <i
          class="fas fa-trash-alt"
          style={{
            color: "black",
            paddingRight: "15px",
          }}
          onClick={onDelete}
        ></i>
        <i
          class="fas fa-pen"
          style={{
            color: "black",
            // paddingRight: "15px",
          }}
        ></i>
      </p>
    </Popover>
  );

  return (
    <div
      style={{
        marginBottom: "20px",
      }}
      className="postItem"
    >
      <h1
        style={{
          fontSize: "20px",
          color: "white",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "500",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: "0.7rem",
          color: "white",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "300",
        }}
      >
        By{" "}
        <span
          style={{ color: "#df0058", fontWeight: "500", marginBottom: "25px" }}
        >
          {name}
        </span>
      </p>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <i class="fas fa-caret-down" style={{ color: "white" }}></i>
      </OverlayTrigger>
      <p
        style={{
          color: "#ffff",
          marginBottom: "15px",
          padding: "5px 10px",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "100",
          fontSize: "1rem",
        }}
      >
        {postText}
      </p>
    </div>
  );
};

export default PostItem;
