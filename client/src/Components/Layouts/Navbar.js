import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/Landing page/logo.svg";

const Navbars = () => {
  return (
    <>
      <Navbar className="justify-content-between navContainer">
        <Navbar.Brand>
          <NavLink to="/">
            <img
              src={Logo}
              style={{
                width: "100px",
              }}
            />
          </NavLink>
        </Navbar.Brand>
        <Nav className="text-white">
          <NavLink
            to="/explore"
            className="text-sm text-white border-white px-4"
            style={{
              textDecoration: "none",
              zIndex: "1",
            }}
          >
            Explore
          </NavLink>
          <NavLink
            to="/user/signin"
            className="text-sm text-white border-white px-4"
            style={{
              textDecoration: "none",
              zIndex: "1",
            }}
          >
            Join
          </NavLink>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navbars;
