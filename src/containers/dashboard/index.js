import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

const Dashboard = () => {
  const [users, setUsers] = useState(null);
  const navigateTo = useNavigate();

  useEffect(() => {
    let temp = JSON.parse(localStorage.getItem("user_credintials") || "[]");
    setUsers(temp);
  }, []);

  // Handles the logout button click
  const onLogout = () => {
    navigateTo("/admin");
  };

  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <span>Dashboard</span>
        <button onClick={onLogout}>Logout</button>
      </div>

      <div className="card-contaner">
        {users &&
          users.map((val, i) => {
            return (
              <div className="card" key={i}>
                <span className="card-semi-title">Username</span>
                <br />
                <span className="card-sub-content ">{val.username}</span>
                <br />
                <span className="card-semi-title">Email</span> <br />
                <span className="card-sub-content ">{val.email}</span>
              </div>
            );
          })}

        <br />
      </div>
    </div>
  );
};

export default Dashboard;
