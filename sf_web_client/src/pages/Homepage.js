import './Homepage.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

// CURRENT ISSUES: ROUTING IN NAVIGATION BAR IS NOT WORKING
//                 NEED TO DYNAMICALLY GENERATE PAGES ACCORDING TO CONTENT

function Homepage() {
  return (
    <div id="homepage">
      <div id="navigationbar">
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
      <div id="pageBody">
        <Category key="some name" categoryLevel="0" categoryName="some name" />
        <Category key="some name" categoryLevel="0" categoryName="some name" />
        <Category key="some name" categoryLevel="0" categoryName="some name" />
        <Category key="some name" categoryLevel="0" categoryName="some name" />
        <Category key="some name" categoryLevel="0" categoryName="some name" />
        <Category key="some name" categoryLevel="0" categoryName="some name" />
        <Category key="some name" categoryLevel="0" categoryName="some name" />
        <Category key="some name" categoryLevel="0" categoryName="some name" />
        <Category key="some name" categoryLevel="0" categoryName="some name" />
      </div>
    </div>
  );
}

function Category(props) {
  return (
    <div className={"categoryTile" + " " + props.categoryLevel}>
      <div className="categoryThumbnail">
        <Link to=""> {props.categoryThumbnail} </Link>
        </div>
      <div className="categoryTitle">{props.categoryName}</div>
    </div>
  );
}

export default Homepage;
