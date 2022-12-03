import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar2() {
    return(
        <div style={{
            backgroundColor: "rgb(200, 243, 220)",
            width:"100%",
            height: "20%",
            paddingLeft: "35%",
            paddingRight: "5%",
            fontSize: "larger",}}>
      <ul style=
      {{
        listStyleType: "none",
        margin: "0",
        padding: "10px",
      }}> 
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
        </div>
    );
}

export default Navbar2;
