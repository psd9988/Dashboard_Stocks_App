import React, { useState } from "react";

import profilePic from "../../Assets/profileLogo.png"
import { NavLink } from "react-router-dom";

import "../Header/header.css";

export const Header = () => {
  const [name, setName] = useState("Dashboard");
  return (
    <div className="mainHeaderContainer">
      <nav className="navbar">
        {/* <div className="name">
          <h1>{name}</h1>
        </div> */}
        <div className="center">
          <div className="search">
            <input
              spellcheck="false"
              type="text"
              className="search"
              id="search"
              placeholder="Search"
            />
            <button className="btn btnSearch"><i class="fa-brands fa-searchengin"></i></button>
          </div>
        </div>
        <nav>
          <button className="btn btnSearch"><i class="fa-brands fa-searchengin"></i></button>
          <button className="btn"></button>
          <button className="btn btnNoti">
            <i class="fa-regular fa-bell"></i>
          </button>
          <NavLink to={"/Login"}><img src={profilePic} /></NavLink>
        </nav>
      </nav>
    </div>
  );
};
