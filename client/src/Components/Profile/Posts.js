import React, { Fragment, useContext, useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { Row, Col } from "react-bootstrap";
import PostItem from "./PostItem";
import PostContext from "../../context/Post/postContext";
import { Spinner } from "react-bootstrap";

const Posts = () => {
  const postContext = useContext(PostContext);

  const { posts, getPosts } = postContext;

  useEffect(() => {
    getPosts();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Row style={{ margin: "0vw", height: "auto" }}>
        {posts.map((eachPost) => (
          <Col
            lg={6}
            xs={12}
            md={12}
            style={{
              marginBottom: "25px",
            }}
          >
            <PostItem key={eachPost.id} eachPost={eachPost} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default Posts;
