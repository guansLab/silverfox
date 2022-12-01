import './Homepage.css';

function Homepage() {
  return (
    <div id="homepage">
      <div id="navigationbar">Navigation Bar</div>
    </div>
  );
}

function Category(props) {
  return (
    <div className={"categoryTile"+" "+props.categoryLevel}>
      <div className="categoryThumbnail">{props.categoryThumbnail}</div>
      <div className="categoryTitle">{props.categoryName}</div>
    </div>
  );
}

export default Homepage;
