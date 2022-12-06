import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const { isLoggedIn } = useSelector(state => state.userId) || ''; /* Does this work? */
  console.log(isLoggedIn)

  if (isLoggedIn === '') {
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
        <li style={{display: "inline", padding: "10px", paddingRight: "55%"}}>
          <img src="../logoCopy.png" alt="Kent Silver Foxes" />
        </li>
        <li style={{display: "inline", padding: "10px"}}>
          <Link to="/">Home</Link>
        </li>
        <li style={{display: "inline", padding: "10px"}}>
          <Link to="/">Logout</Link> {/* This should work, but page goes blank*/}
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
        <li style={{display: "inline", padding: "10px", paddingRight: "55%"}}>
          <img src="../logoCopy.png" alt="Kent Silver Foxes" />
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