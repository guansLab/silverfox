import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style=
    {{
      position: "relative", 
      width: "100%", 
      height: "20%",
      fontSize: "Larger"}}>
      <ul style=
      {{
        listStyleType: "none",
        margin: "0",
        padding: "10px",
      }}>
        <li style={{display: "inline", padding: "10px", paddingRight: "77%"}}>
          FOX LOGO
        </li>
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