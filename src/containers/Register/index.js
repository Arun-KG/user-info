import React from "react";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./style.scss";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigateTo = useNavigate();
  const [isError, setIsError] = useState(false);

  // Handles routing programmatically
  const goToLogin = () => {
    navigateTo("/login");
  };

  // Handles TextFields text update event
  const onTextUpdate = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handles from submission
  const onSubmit = (e) => {
    e.preventDefault();

    //console.log(user);
    writeToLocal();
  };

  // Writing to the local stoage
  const writeToLocal = () => {
    let temp = JSON.parse(localStorage.getItem("user_credintials") || "[]");

    if (
      temp.find((usr) => {
        return usr.username === user.username;
      }) === undefined ||
      null
    ) {
      temp.push(user);
      setIsError(false);
      goToLogin();
      //console.log("Inserted");
    } else {
      setIsError(true);
      //console.log("Already exists");
    }

    localStorage.setItem("user_credintials", JSON.stringify(temp));

    //console.log(temp);
  };

  return (
    <div className="container">
      <div className="main-container">
        <h1 className="title">Register User</h1>
        <form className="form" autoComplete="off" onSubmit={onSubmit}>
          <label className="label">Username</label>
          <input required type="text" name="username" onChange={onTextUpdate} />
          <label className="label">Email</label>
          <input required type="email" name="email" onChange={onTextUpdate} />
          <label className="label">Password</label>
          <input required type="password" name="password" onChange={onTextUpdate} />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <br />
        <p>{isError ? "Username already exists!" : ""}</p>
        <div className="separator" />
        <Link className="link" to={"/login"}>
          Alredy a user, login here
        </Link>
        <Link className="link" to={"/admin"}>
          or login||register as admin
        </Link>
      </div>
    </div>
  );
};

export default Register;
