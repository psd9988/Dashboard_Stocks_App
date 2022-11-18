import React from "react";

import "../SideBar/sidebar.css";

export const SideBar = () => {
  return (
    <div classNameName="sideBarMainContainer sidebar">
      <button type="button" className=" btnside burger" onclick="toggleSidebar()"></button>
      <aside className="sidebar">
        <nav>
          <button type="button" className="btnside">
            <a href="/src/Assets/profilePic.jpg"></a>
            <span className="brand">INVESTURE</span>
          </button>
          <button type="button" className="btnside">
            <i className="fa-solid fa-house"></i>
            <span>Dashboard</span>
          </button>
          <button type="button" className="btnside">
            <i class="fa-solid fa-money-bill-trend-up"></i>
            <span>Stocks</span>
          </button>
          <button type="button" className="btnside">
            <i class="fa-regular fa-newspaper"></i>
            <span>Bonds</span>
          </button>
          <button type="button" className="btnside">
            <i class="fa-brands fa-bitcoin"></i>
            <span>Crypto</span>
          </button>
          <button type="button" className="btnside">
            <i class="fa-solid fa-chart-simple"></i>
            <span>Analytics</span>
          </button>
          <button type="button" className="btnside">
            <i class="fa-solid fa-user"></i>
            <span>Accounts</span>
          </button>
          <button type="button" className="btnside">
            <i class="fa-solid fa-gear"></i>
            <span>Settings</span>
          </button>
        </nav>
      </aside>
    </div>
  );
};
