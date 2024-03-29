import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../Header/login.css"

export function Login() {

  const [user, setUser] = useState(false)

  function Loginform(){
    const createAccount = () => setUser(true);
    return (
    <form className="form">
    <input type="text" name="username" placeholder="UserName" />
    <input type="password" placeholder="Password" name="password"/>
    <NavLink to={"/App"}><button type="submit" className="loginBtn">Login</button></NavLink>
    <button onClick={createAccount()} className="createBtn">Don't have account..? Sign In</button>
  </form>
  )
  }

  function Register(){
    return (
      <div className="form1">
            <input type="text" name="username" placeholder="UserName" /><br />
            <input type="text" name="emailId" placeholder="Email ID"></input><br></br>
            <input type="password" placeholder="Enter Password" name="password"/><br />
            <input type="password" placeholder="Re-enter Password" name="password"/><br></br>
            <button type="submit" className="signupBtn">Sign UP</button><br></br>
            <button onClick={() => setUser(false)} className="createBtn">Already have account Login...</button>
      </div>
    )
  }

  return (
    <>
      <div className="form2">
        {!user ?<Loginform />:<Register />}
      </div>
    </>
  );
};