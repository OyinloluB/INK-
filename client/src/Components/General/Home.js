import React from "react";
import "./home.css";
import Navbar from "../Layouts/Navbar";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/Landing page/landingPageImage.png";

export const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <Navbar />
        <Container
          style={{
            height: "90vh",
          }}
        >
          <Row className="row">
            <Col
              xs={12}
              lg={6}
              md={12}
              className="text-white hero-text-section"
            >
              <h1 className="hero-text">
                Grab a cup of{" "}
                <span
                  style={{
                    color: "#DF0058",
                    fontSize: "42px",
                    fontWeight: "bold",
                  }}
                >
                  Coffee...
                </span>
              </h1>
              <h3 className="hero-subtext">
                Share your brilliance with the
                <br /> world from the comfort of your couch!
              </h3>
              <Link
                to="/user/signin"
                className="hero-buttonLink"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <button className="button">Join Now</button>
              </Link>
            </Col>
            <Col xs={12} lg={6} md={12} className="hero-image-section">
              <img
                src={HeroImage}
                alt="Home-page-image"
                className="hero-image"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
