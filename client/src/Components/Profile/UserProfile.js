import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, CssBaseline, List } from "@material-ui/core";
import { Tab } from "semantic-ui-react";
import { Dropdown } from "react-bootstrap";
import { CreatePosts } from "./CreatePosts";
import { UserPost } from "./UserPost";
import Profile from "../../assets/Profile/userImage.jpg";
import Logo from "../../assets/Profile/Logo.png";
import AuthContext from "../../context/auth/authContext";
import axios from "axios";
import "./user.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const panes = [
  {
    menuItem: "Posts",
    render: () => (
      <Tab.Pane attached={false}>
        <UserPost />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Create Post",
    render: () => <CreatePosts />,
  },
];

export const UserProfile = () => {
  const classes = useStyles();

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6 responsiveNav">
        <div
          className="flex-shrink-0 text-white mr-6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>
            <img
              src={Logo}
              alt="logo"
              style={{
                width: "20px",
              }}
            />
          </span>
          <i
            class="fas fa-ellipsis-v"
            style={{
              color: "white",
            }}
          ></i>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src={Profile}
              alt="profile-image"
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid #fff",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div className="userContent">
              <h3
                style={{
                  fontSize: "16px",
                  marginBottom: "5px",
                  color: "white",
                }}
              >
                Fikayo Adetunji
              </h3>
              <span
                style={{
                  color: "#BE9063",
                  fontSize: "12px",
                }}
              >
                @fizzlewiththekizzle
              </span>
            </div>
          </div>
        </div>
      </nav>{" "}
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <List className="sidebarItems">
            <div className="sidebarTopContent">
              <img
                src={Profile}
                alt="profile-image"
                style={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div className="userContent">
                <h3
                  style={{
                    fontSize: "16px",
                    marginBottom: "5px",
                  }}
                >
                  Fikayo Adetunji
                </h3>
                <span
                  style={{
                    color: "#BE9063",
                    fontSize: "12px",
                  }}
                >
                  @fizzlewiththekizzle
                </span>
              </div>
            </div>
          </List>
          <List
            style={{
              color: "white",
            }}
          >
            Logout
          </List>
        </Drawer>
        <main className={classes.content}>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </main>
      </div>
    </>
  );
};
