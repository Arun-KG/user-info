import React from "react";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./style.scss";

const AdminRegister = () => {
  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    password: "",
    is_admin: true,
  });
  const navigateTo = useNavigate();
  const [isError, setIsError] = useState(false);

  // Handles routing programmatically
  const goToLogin = () => {
    navigateTo("/admin");
  };

  // Handles Form update event
  const onFormUpdate = (e) => {
    console.log(e.target.type);
    setAdmin({
      ...admin,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
    console.log(admin);
  };

  // Handles from submission
  const onSubmit = (e) => {
    e.preventDefault();

    //console.log(user);
    writeToLocal();
  };

  // Writing to the local stoage
  const writeToLocal = () => {
    let temp = JSON.parse(localStorage.getItem("admin_credintials") || "[]");

    if (
      temp.find((admi) => {
        return admi.username === admin.username;
      }) === undefined ||
      null
    ) {
      temp.push(admin);
      setIsError(false);
      goToLogin();
    } else {
      setIsError(true);
    }

    localStorage.setItem("admin_credintials", JSON.stringify(temp));
  };

  return (
    <div className="container">
      <div className="main-container">
        <h1 className="title">Register Admin</h1>

        <form className="form" autoComplete="off" onSubmit={onSubmit}>
          <label className="label">Username:</label>
          <input required type="text" name="username" onChange={onFormUpdate} />
          <label className="label">Email</label>
          <input required type="email" name="email" onChange={onFormUpdate} />
          <label className="label">Password</label>
          <input required type="password" name="password" onChange={onFormUpdate} />
          <div className="checkbox-container">
            <label className="label">
              Admin status{" "}
              <input
                className="styled-checkbox"
                type="checkbox"
                name="is_admin"
                onChange={onFormUpdate}
              />
            </label>
          </div>

          <br />
          <input type="submit" value="Submit" />
        </form>

        <p>{isError ? "An admin with the same username already exists" : ""}</p>

        <div className="separator" />
        <Link className="link" to="/admin">
          Are you an admin? login here
        </Link>
      </div>
    </div>
  );
};

export default AdminRegister;
