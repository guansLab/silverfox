import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { username } = useSelector(state => state.session);

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
          <img src="../logoCopy.png" alt="Kent Silver Foxes" />
          <ul style={{display: "inline", padding: "1%", float:"right"}}>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/">Home</Link>
            </li>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/logout">Logout</Link> {/* This should work, but page goes blank*/}
            </li>
          </ul>
          <ul style={{display: "inline", float:"right"}}>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/resources">Resource Guide</Link>
            </li>
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
          <img src="../logoCopy.png" alt="Kent Silver Foxes" />
          <ul style={{display: "inline", padding: "1%", float:"right"}}>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/">Home</Link>
            </li>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <ul style={{display: "inline", float:"right"}}>
            <li style={{display: "inline", padding: "10px"}}>
              <Link to="/resources">Resource Guide</Link>
            </li>
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