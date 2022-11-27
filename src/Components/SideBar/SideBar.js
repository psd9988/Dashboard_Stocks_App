import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../Assets/stocks.png";

import "../SideBar/sidebar.css";

export const SideBar = () => {
  return (
    <>
    <button type="button" className=" btnside burger" onclick="toggleSidebar()"></button>
      <aside className="sidebar">
        <nav>
          <button type="button" className="btnside">
            {/* <NavLink to={"/App"}> */}
              <img src={logo} alt="logo" srcset="" />
              <span className="brand">STOKIDA</span>
            {/* </NavLink> */}
          </button>
          <button type="button" className="btnside sidebtn">
            <i className="fa-solid fa-house"></i>
           <NavLink to={'/'} > <span>Dashboard</span></NavLink>
          </button>
          <button type="button" className="btnside sidebtn">
            <i class="fa-solid fa-money-bill-trend-up"></i>
            <NavLink to={'/stocks'}> <span>Stocks</span></NavLink>
          </button>
          <button type="button" className="btnside sidebtn">
            <i class="fa-regular fa-newspaper"></i>
            <span>Bonds</span>
          </button>
          <button type="button" className="btnside sidebtn">
            <i class="fa-brands fa-bitcoin"></i>
            <span>Crypto</span>
          </button>
          <button type="button" className="btnside sidebtn">
            <i class="fa-solid fa-chart-simple"></i>
            <span>Analytics</span>
          </button>
          <button type="button" className="btnside sidebtn">
            <i class="fa-solid fa-user"></i>
            <span>Accounts</span>
          </button>
          <button type="button" className="btnside sidebtn">
            <i class="fa-solid fa-gear"></i>
            <span>Settings</span>
          </button>
        </nav>
      </aside>
    </>
  );
};
