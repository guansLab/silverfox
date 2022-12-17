import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css"

function Navbar() {
  const { username } = useSelector(state => state.session);
  const nav = useNavigate();

  if (username) {
    return(
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
        <li style={{display: "inline", padding: "1%", paddingRight: "55%"}}>
          <img className={"logo"} src="../logoCopy.png" alt="Kent Silver Foxes" onClick={ () => {nav("/") }}/>
          <ul style={{display: "inline", padding: "1%", float:"right"}}>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
          <ul style={{display: "inline", float:"right"}}>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/about">About Us</Link>
            </li>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    
  );
  }

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
        <li style={{display: "inline", padding: "1%", paddingRight: "55%"}}>
          <img className={"logo"} style={{ hover: "pointer" }} src="../logoCopy.png" alt="Kent Silver Foxes" onClick={ () => {nav("/") }}/>
          <ul style={{display: "inline", padding: "1%", float:"right"}}>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/login">Login</Link>
            </li>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
          <ul style={{display: "inline", float:"right"}}>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/about">About Us</Link>
            </li>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;