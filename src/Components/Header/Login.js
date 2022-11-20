import React, { useState } from "react";
//import "../Header/login.css"

export function Login() {

  const [user, setUser] = useState(false)

  return (
    <>
      <h1 className="Login-Form">Login Form</h1>
      <div className="form2">
        {!user ?
          <form className="form">
            <input type="text" name="username" placeholder="UserName" />
            <input type="password" placeholder="Password" name="password"/>
            <button type="submit">Login</button>
            <button onClick={() => setUser(true)}>Don't have account..? Sign In</button>
          </form>
          :
          <div className="form1">
            <input type="text" name="username" placeholder="UserName" /><br />
            <input type="text" name="emailId" placeholder="Email ID"></input><br></br>
            <input type="password" placeholder="Enter Password" name="password"/><br />
            <input type="password" placeholder="Re-enter Password" name="password"/><br></br>
            <button type="submit">Sign UP</button><br></br>
            <button onClick={() => setUser(false)}>Already have account Login...</button>
          </div>
        }</div>
    </>
  );
};