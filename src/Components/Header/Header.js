import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import profilePic from "../../Assets/profileLogo.png";
import { NavLink } from "react-router-dom";

import "../Header/header.css";

export const Header = () => {
  const [name, setName] = useState("Dashboard");
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const [search, setSearch] = useState([]);

  const debounce = (func) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log(...args);
        func.apply(this, args);
      }, 500);
    };
  };

  const handleChange = (event) => {
    const { value } = event.target;
    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=DLIU0OMHQMBSQFJ4`
    )
      .then((res) => res.json())
      .then((data) => {
        const symbolList = data["bestMatches"];
        symbolList ? setSearch(symbolList.splice(0, 4)) : setSearch("");
      });
  };

  return (
    <div className="mainHeaderContainer">
      <nav className="navbar">
        {/* <div className="name">
          <h1>{name}</h1>
        </div> */}
        <div className="center">
          <div className="search">
            {/* <input
              spellcheck="false"
              type="text"
              className="search"
              id="search"
              placeholder="Search"
            /> */}
            <input
              type={"text"}
              name={"search"}
              placeholder={"Enter Something..."}
              // className={'search'} onChange ={optimisedVersion}/>
              className={"search"}
              onChange={debounce(handleChange)}
              autocomplete="off"
            />
            {search?.length > 0 && (
              <div className="autocomplete">
                {search?.map((el, i) => (
                  <div
                    key={i}
                    className={"autocompleteItems"}
                    style={{ background: "#f3f3f3" }}
                  >
                    <div style={{ marginBottom: "0.5rem" }}>
                      {el["2. name"].slice(0, 30)}
                    </div>
                    <div
                      className="searchItemsBottomLine"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <div style={{ background: "lightBlue" }}>
                        {el["1. symbol"]}
                      </div>
                      <div style={{ background: "lightGreen" }}>
                        {el["3. type"]}
                      </div>
                      <div style={{ background: "#ff7b7b" }}>
                        {el["4. region"]}
                      </div>
                      <div style={{ background: "gold" }}>
                        {el["8. currency"]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button className="btn btnSearch">
              <i class="fa-brands fa-searchengin"></i>
            </button>
          </div>
        </div>
        <nav>
          <button className="btn btnSearch">
            <i class="fa-brands fa-searchengin"></i>
          </button>
          <button className="btn"></button>
          <button className="btn btnNoti">
            <strong>
              <i class="fa-regular fa-bell"></i>
            </strong>
          </button>
          {isAuthenticated && (
            <>
              <img src={user.picture} alt={user.name} />
              <h2>{user.nickname}</h2>
            </>
          )}
          {isAuthenticated ? (
            <button
              className="logging"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          ) : (
            <button className="logging" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )}
        </nav>
      </nav>
    </div>
  );
};
