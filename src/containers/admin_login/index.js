import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import "./style.scss";

const AdminLogin = () => {
  const [admin, setAdmin] = useState({ username: "", password: "" });
  const [isError, setIsError] = useState(false);
  const navigateTo = useNavigate();

  // Route to Home page
  const goToDashboard = () => {
    navigateTo("/dashboard");
  };

  // Handles TextFields text update event
  const onTextUpdate = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  // Handles from submission
  const onSubmit = (e) => {
    e.preventDefault();

    checkIfUserExitis();
  };

  // Cheking if such user exists in the local stoage
  const checkIfUserExitis = () => {
    let temp = JSON.parse(localStorage.getItem("admin_credintials") || "[]");

    if (
      temp.find((value) => {
        return value.username === admin.username && value.password === admin.password
          ? true
          : false;
      })
    ) {
      setIsError(false);

      goToDashboard();
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="container">
      <div className="main-container">
        <h1 className="title">Admin Login</h1>

        <form className="form" autoComplete="off" onSubmit={onSubmit}>
          <label className="label">Username</label>
          <input required type="text" name="username" onChange={onTextUpdate} />
          <label className="label">Password</label>
          <input required type="password" name="password" onChange={onTextUpdate} />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <p>{isError ? "No such admin exists" : ""}</p>

        <div className="separator" />

        <Link className="link" to="/admin_register">
          Not an admin? Register here
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
