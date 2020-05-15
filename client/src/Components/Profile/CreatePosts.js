import React, { useState, useContext } from "react";
import { Tab, Form, TextArea, Button } from "semantic-ui-react";
import "./user.css";
import PostContext from "../../context/Post/postContext";

export const CreatePosts = () => {
  const postContext = useContext(PostContext);

  const { addPost } = postContext;

  const [post, setPost] = useState({
    name: "Fikayo Adetunji",
    title: "",
    subtitle: "",
    postText: "",
  });

  const { title, subtitle, postText } = post;

  const onChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    console.log(post);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    addPost(post);
    setPost({
      title: "",
      subtitle: "",
      postText: "",
    });
  };
  return (
    <div>
      <Tab.Pane attached={false}>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Title"
              width={10}
              name="title"
              value={title}
              onChange={onChange}
              className="inputField"
            />
            <Form.Input
              placeholder="Subtitle"
              width={7}
              name="subtitle"
              value={subtitle}
              onChange={onChange}
              className="inputField"
            />
          </Form.Group>
          <TextArea
            rows={15}
            placeholder="What is that brilliant idea?"
            name="postText"
            value={postText}
            onChange={onChange}
          />
          <div
          // style={{
          //   width: "65vw",
          //   marginLeft: "3vw",
          //   color: "white",
          //   display: "flex",
          //   alignContent: "center",
          //   justifyContent: "flex-end",
          // }}
          >
            <Button
              style={{
                backgroundColor: "rgb(190, 144, 99)",
                color: "white",
                width: "140px",
                height: "50px",
                marginTop: "15px",
              }}
            >
              Post
            </Button>
          </div>
        </Form>
      </Tab.Pane>
    </div>
  );
};
