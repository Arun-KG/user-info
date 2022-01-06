import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./style.scss";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [shoWDetails, setShoWDetails] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigateTo = useNavigate();

  // Fetches and poulates the Home page with data
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        alert("Cannot fetch data from the API");
        console.error(err);
      });

    setCurrentUser(JSON.parse(localStorage.getItem("user_login_credintials")));
  }, []);

  // On signs out the user and remove login credentials from the local storage
  const logoutUser = () => {
    localStorage.removeItem("user_login_credintials");
    goToRegister();
  };

  // Routes to Register page
  const goToRegister = () => {
    navigateTo("/");
  };

  // User list click handler
  const handleUserClick = (id) => {
    setSelectedIndex(id);
    setShoWDetails(shoWDetails ? false : true);
  };

  return (
    <div className="home-container">
      <div className="top-bar">
        <span>Hello there {currentUser && currentUser.username}</span>
        <button onClick={logoutUser}>Logout</button>
      </div>

      <div className="card-contaner">
        {userData &&
          userData.map((obj, i) => {
            return (
              <div className="card" key={obj.id} onClick={() => handleUserClick(obj.id)}>
                {obj.name} <br />
                {obj.username}
                <br />
                {obj.email}
                <br />
                {shoWDetails && obj.id === selectedIndex && (
                  <div>
                    {obj.phone}
                    <br />
                    {obj.website}
                    <br />
                    <span className="card-semi-title">Company</span> <br />
                    <div className="card-sub-content">
                      {obj.company.name}
                      <br />
                      {obj.company.catchPhrase}
                      <br />
                      {obj.company.bs}
                      <br />
                    </div>
                    <span className="card-semi-title">Address</span> <br />
                    <div className="card-sub-content">
                      {obj.address.street}
                      <br />
                      {obj.address.suite}
                      <br />
                      {obj.address.city}
                      <br />
                    </div>
                    <span className="card-semi-title">Geolocation</span>
                    <div className="card-sub-content">
                      {obj.address.geo.lat}
                      <br />
                      {obj.address.geo.lng}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
