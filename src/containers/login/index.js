import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import "./style.scss";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isError, setIsError] = useState(false);
  const navigateTo = useNavigate();

  // Route to Home page
  const goToHome = () => {
    navigateTo("/home");
  };

  // Handles TextFields text update event
  const onTextUpdate = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handles from submission
  const onSubmit = (e) => {
    e.preventDefault();

    checkIfUserExitis();
  };

  // Cheking if such user exists in the local stoage
  const checkIfUserExitis = () => {
    let temp = JSON.parse(localStorage.getItem("user_credintials") || "[]");

    let result = temp.find((value) => {
      return value.username === user.username && value.password === user.password ? true : false;
    });

    if (result) {
      setIsError(false);
      // Storing user login credentials to the local storage
      localStorage.setItem("user_login_credintials", JSON.stringify(user));

      goToHome();
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="container">
      <div className="main-container">
        <h1 className="title">User Login</h1>

        <form className="form" autoComplete="off" onSubmit={onSubmit}>
          <label className="label">Username</label>
          <input required type="text" name="username" onChange={onTextUpdate} />
          <label className="label">Password</label>
          <input required type="password" name="password" onChange={onTextUpdate} />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>{isError ? "No such user exists" : ""}</p>
        <div className="separator" />
        <Link className="link" to="/">
          Dont have an account? signin
        </Link>
      </div>
    </div>
  );
};

export default Login;
