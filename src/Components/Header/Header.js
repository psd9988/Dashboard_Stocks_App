import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react"

import profilePic from "../../Assets/profileLogo.png"
import { NavLink } from "react-router-dom";

import "../Header/header.css";

export const Header = () => {
  const [name, setName] = useState("Dashboard");
  const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0();
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
          <button className="btn btnNoti"><strong>
            <i class="fa-regular fa-bell"></i></strong>
          </button>
          {
            isAuthenticated && (
              <>
                <img src={user.picture} alt={user.name} />
                <h2>{user.nickname}</h2>
              </>
            )
          }
          {
            isAuthenticated ? (<button className="logging" onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>)
          : (<button className="logging" onClick={() => loginWithRedirect()}>Log In</button>)
          }
          
          
        </nav>
      </nav>
    </div>
  );
};
