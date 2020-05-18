import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";
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
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  // const [loading, setLoading] = useState(false);

  const { firstname, lastname, username, email, password, imageUrl } = user;

  const [image, setImage] = useState({
    image: null,
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
    console.log(image);
  };

  const onSubmit = (e) => {
    console.log(user);
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      image === null
    ) {
      setAlert("Please enter all fields", "danger");
    } else {
      let formData = new FormData();
      formData.append("firstname", firstname);
      formData.append("lastname", lastname);
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("image", image);
      register(formData);

      // setLoading(true);
      // register({
      //   firstname,
      //   lastname,
      //   username,
      //   email,
      //   password,
      // });

      console.log(user);
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
                <div className="flexInputs">
                  <div>
                    <label
                      className="block text-white text-sm mb-2"
                      for="firstname"
                    >
                      First Name:
                    </label>
                    <input
                      className="inputField border border-500 rounded w-full py-2 px-3 text-white mb-3  focus:outline-none"
                      name="firstname"
                      value={firstname}
                      onChange={onChange}
                      type="text"
                      required
                    />
                  </div>
                  &nbsp;
                  <div>
                    <label
                      className="block text-white text-sm mb-2"
                      for="lastname"
                    >
                      Last Name:
                    </label>
                    <input
                      className="inputField border border-500 rounded w-full py-2 px-3 text-white mb-3  focus:outline-none"
                      name="lastname"
                      value={lastname}
                      onChange={onChange}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <label className="block text-white text-sm mb-2" for="username">
                  Username:
                </label>
                <input
                  className="inputField border border-500 rounded w-full py-2 px-3 text-white mb-3  focus:outline-none"
                  name="username"
                  value={username}
                  onChange={onChange}
                  type="text"
                  required
                />
                <label className="block text-white text-sm mb-2" for="email">
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
              <input type="file" name="file" onChange={onChangeHandler} />
              <div className="flex items-center justify-between">
                <button
                  className="formButton rounded w-full text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  subTextMedium
                >
                  {/* {loading ? <Spinner animation="grow" /> : "Join us!"} */}
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
