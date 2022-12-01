import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style=
    {{
      position: "absolute", 
      float: "top", 
      width: "100%", 
      height: "20%"}}>
      <ul style=
      {{
        listStyleType: "none",
        margin: "0",
        padding: "10px",
      }}>
        <li style={{display: "inline", padding: "10px"}}>
          <Link to="/">Home</Link>
        </li>
        <li style={{display: "inline", padding: "10px"}}>
          <Link to="/login">Login</Link>
        </li>
        <li style={{display: "inline", padding: "10px"}}>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;