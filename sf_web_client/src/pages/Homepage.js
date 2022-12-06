import './Homepage.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from '../axios';

// CURRENT ISSUES: ROUTING IN NAVIGATION BAR IS NOT WORKING
//                 NEED TO DYNAMICALLY GENERATE PAGES ACCORDING TO CONTENT

const HOME_CATEGORIES_URL = '/content-category/'

function Homepage() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getCategories = async() => {
      setLoading(true);
      const response = await axios.get(HOME_CATEGORIES_URL,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: false
      });
      if(componentMounted){
        setData(response.data.results);
        setFilter(response.data.results);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      }
    }

    getCategories();
  }, []);

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const ShowCategories = () => {
    <div className='button'>
        {filter.map((category) => {
          console.log(category);
          return(
            <>
              <div className={"categoryName" + " " + category.name}>
                <div className="categoryThumbnail">
                  </div>
                <div className="categoryTitle">{category.name}</div>
              </div>
            </>
          )
        })}
    </div>
  }

  return (
    <div id="homepage">
      <div id="pageBody">
        {loading ? <Loading/>: <ShowCategories/>}
      </div>
    </div>
  );
}

function Category(props) {
  return (
    <div className={"categoryTile" + " " + props.categoryLevel}>
      <div className="categoryThumbnail">
        </div>
      <div className="categoryTitle">{props.categoryName}</div>
    </div>
  );
}

export default Homepage;
