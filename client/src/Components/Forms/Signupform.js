import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import Navbar from "../Layouts/Navbar";
import "./forms.css";

const Signupform = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/profile/user");
    }

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }

    //eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="formContainer formColor flex items-center flex-wrap 500"
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
              <div className="mb-6">
                <label className="block text-white text-sm mb-2" for="password">
                  Username:
                </label>
                <input
                  className="inputField border border-500 rounded w-full py-2 px-3 text-white mb-3  focus:outline-none"
                  name="name"
                  value={name}
                  onChange={onChange}
                  type="text"
                  required
                />
                <label className="block text-white text-sm mb-2" for="password">
                  Email:
                </label>
                <input
                  className="inputField border border-500 rounded w-full py-2 px-3 text-white mb-3  focus:outline-none"
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
                  className="inputField border border-500 rounded w-full py-2 px-3 text-white mb-3  focus:outline-none"
                  name="password"
                  value={password}
                  onChange={onChange}
                  type="password"
                  minLength="6"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="formButton rounded w-full text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  subTextMedium
                >
                  Join us!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signupform;
