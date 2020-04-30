import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import Navbar from "../Forms/Signinform";
import "./forms.css";

const Signinform = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/profile/posts");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div
        className="formContainer formColor flex items-center"
        style={{
          justifyContent: "center",
        }}
      >
        <div>
          <div>
            <form
              onSubmit={onSubmit}
              className="inputBox rounded px-16 pt-16 pb-16 mb-4"
            >
              <div className="mb-6 ">
                <label className="block text-white text-sm mb-2" for="password">
                  Email:
                </label>
                <input
                  className="inputField border border-500 rounded py-2 px-3 text-white  focus:outline-none"
                  name="email"
                  value={email}
                  onChange={onChange}
                  type="email"
                  required
                />
                <label className="block text-white text-sm mb-2" for="password">
                  Password:
                </label>
                <input
                  className="inputField border border-500 rounded py-2 px-3 text-white  focus:outline-none"
                  name="password"
                  value={password}
                  onChange={onChange}
                  type="password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="formButton rounded w-full text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  subTextMedium
                >
                  Welcome back!
                </button>
              </div>
              <div className="flex items-center justify-center subTextSmall mt-8">
                <p className="text-white">
                  New user?&nbsp;
                  <span
                    style={{
                      color: "#be9063",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    <Link to="/user/signup" className="linkStyle">
                      Sign up!
                    </Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signinform;
