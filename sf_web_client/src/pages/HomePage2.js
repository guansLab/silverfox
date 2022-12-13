import './Homepage.css';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { getCategories, getContents} from "../actions/categories";
import { connect } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { getResult } from './AxiosHelper';
import { useLocation } from 'react-router-dom';

const HOME_CATEGORIES_URL = '/content-category/'
const CONTENTS_URL = '/content/'


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

// CURRENT ISSUES: ROUTING IN NAVIGATION BAR IS NOT WORKING
//                 NEED TO DYNAMICALLY GENERATE PAGES ACCORDING TO CONTENT


function Homepage(props) {
  const nav = useNavigate();
  const [categories, setCategories] = useState([]);
  const [contents, setContents] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [prePath, setPrePath] = useState(null);
  var catName = null;

  var params = useParams();
  var location = useLocation();


  async function getCategories() {
    let url = HOME_CATEGORIES_URL;
      if(catName){
        url += "?parent_category__category_name=" + catName;
      }
      else{
        url += "?root_category=True";
      }
    const response = await getResult(url);
  if (response.statusText === "OK") {
      setCategories(response.data.results);
    }
    console.log(response.data);
}

async function getContents() {
  if (!catName) {
    setContents([]);
    return;
  }
  let url = CONTENTS_URL + "?category__category_name=" + catName;
  const response = await getResult(url);
if (response.statusText === "OK") {
    setContents(response.data.results);
  }
  console.log(response.data);
}

  const getCategoryData = () => {
    getCategories();
    getContents();
  }
  

  useEffect(() => {
    console.log("use effect");
    catName = params['id'];
    getCategoryData();
    },[]);

  const onClickCategory = () => {
    console.log("Onclick category");
    console.log(params['id']);
    catName = params['id'];
    getCategoryData();
    }


  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const handleClick = (image) => {
    console.log(location);
    var slash = "/";
    if (location.pathname == "/") {
        slash = "";
    }
    nav(location.pathname + slash + image.category_name);
    
  }

  if (params['id'] != prePath) {
    setPrePath(params['id']);
    onClickCategory();
}

  const ShowCategories = () => {
    return (
      <div>
      <ImageList className="imageList" cols={4}>
      {categories.map((image) => (
        <ButtonBase sx={{ width: 246, height: 311 }} onClick={() => handleClick(image)}>
        <ImageListItem key={image.id}>
        
          <img
            src={`${image.thumbnail}?w=248&fit=crop&auto=format`}
            alt={image.category_name}
            loading="lazy"
            className={"categoryItem " + image.id}
          />
          <ImageListItemBar
            title={image.category_name}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${image.category_name}`}
              >
              </IconButton>
            }
            className={"categoryItemName"}
          />
        </ImageListItem>
        </ButtonBase>
      ))}
    </ImageList>
    <List>
      {contents && contents.map((image) => {
        return (
          <button className={"content"}
            key={image.id}
            onClick={() => {nav('/content/'+image.id)}}>
              <div className={"contentTextDiv"}>
                <img
                  alt={"Image"}
                  src={`${image.thumbnail}?w=230&fit=crop&auto=format`}
                  className={"categoryImage"}
                />
                <span className={"contentText"}>
                  <div className={"contentTitle"}>
                    <h2>{ image.title }</h2>
                  </div>
                  <div className={"contentSnippet"}>
                    <p>{ image.snippet }</p>
                  </div>
                </span>
              </div>
              <ListItemText id={image.id} />
          </button>
        )
      })}
    </List>
    </div>
  )
}

    return (
    <div id="homepage">
      <div id="pageBody">
        {categories == [] ? <Loading/>: <ShowCategories/>}
      </div>
    </div>
  );
    }


export default Homepage;