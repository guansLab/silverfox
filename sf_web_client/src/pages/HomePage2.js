import './Homepage.css';
import { useEffect, useState } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import { useNavigate, useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { getResult } from './AxiosHelper';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'reactstrap';

const HOME_CATEGORIES_URL = '/content-category/'
const CONTENTS_URL = '/content?category__category_name='

// CURRENT ISSUES: ROUTING IN NAVIGATION BAR IS NOT WORKING
//                 NEED TO DYNAMICALLY GENERATE PAGES ACCORDING TO CONTENT


function Homepage(props) {
  const nav = useNavigate();
  const [categories, setCategories] = useState([]);
  const [contents, setContents] = useState([]);
  const [prePath, setPrePath] = useState(null);
  var catId = null;

  var params = useParams();
  var location = useLocation();


  async function getCategories() {
    let url = HOME_CATEGORIES_URL;
      if(catId){
        url += "?parent_category__category_name=" + catId;
      }
      else{
        url += "?root_category=True";
      }
    const response = await getResult(url);
  if (response.statusText === "OK") {
      setCategories(response.data.results);
    }
}

async function getContents() {
  if (!catId) {
    setContents([]);
    return;
  }
  let url = CONTENTS_URL + catId;
  const response = await getResult(url);
if (response.statusText === "OK") {
    setContents(response.data.results);
  }
}

  const getCategoryData = () => {
    getCategories();
    getContents();
  }
  

  useEffect(() => {
    catId = params['id'];
    getCategoryData();
    },[]);

  const onClickCategory = () => {
    catId = params['id'];
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
                aria-label={`info about ${image.id}`}
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
  const Breadcrumb = () => {
    let index = 0;
    let breadcrumbs = []
    let path_to_crumb = location.pathname.toString();
    path_to_crumb
    while(index < path_to_crumb.length){
      if (index === 0)
      {
        breadcrumbs.push(["Home", "/"]);
      }
      else{
        let slash_index = path_to_crumb.indexOf("/", index);
        if(slash_index == -1)
          slash_index = path_to_crumb.length;
        let next_path = path_to_crumb.substr(0, slash_index);
        let next_crumb = path_to_crumb.substr(index, slash_index-index);
        breadcrumbs.push([next_crumb, next_path])
        index = slash_index;
      }
      index += 1;
    }
    return (
      <div className={"breadcrumbs"}>
        {console.log(breadcrumbs)}
      {breadcrumbs.map((each) => (
        <span key={each[1]} className={'eachBreadcrumb'} onClick={()=> {nav(each[1])}}>{each[0].replaceAll("%20", " ") + ">"}</span>
      ))}
      </div>
    )
  }

    return (
    <div id="homepage">
      <Breadcrumb/>
      <div id="pageBody">
        {categories == [] ? <Loading/>: <ShowCategories/>}
      </div>
    </div>
  );
    }


export default Homepage;