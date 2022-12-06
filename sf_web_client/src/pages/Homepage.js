import './Homepage.css';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import axios from '../axios';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

// CURRENT ISSUES: ROUTING IN NAVIGATION BAR IS NOT WORKING
//                 NEED TO DYNAMICALLY GENERATE PAGES ACCORDING TO CONTENT

const HOME_CATEGORIES_URL = '/content-category/'

function Homepage(props) {

  console.log(props);

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [subCategory, setSubCategory] = useState(null);
  let componentMounted = true;


    const getCategories = async() => {
      console.log("Changed state");
      setLoading(true);
      let url = HOME_CATEGORIES_URL;
      if(subCategory){
        url += "?parent_category=" + subCategory;
      }
      else{
        url += "?root_category=True";
      }
      const response = await axios.get(url,
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
 

  const handleClick = category => {
    setSubCategory(category.id);
    setLoaded(false);
  }

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const ShowCategories = () => {
    if (!loaded)
    {
         getCategories();
         setLoaded(true);
    }
    return (
        <Grid container spacing={12} >
        {filter.map((category) => {
            return(
              <Grid item key={category.id} xs={12} sm={6} md={6}>
                <ButtonBase sx={{ width: 246, height: 311 }} onClick={() => {setSubCategory(category.id);setLoaded(false);}}>
                  <Img alt="complex" src={category.thumbnail} className={"categoryItem " + category.id}/>
                </ButtonBase>
              </Grid>
            )
          })}
      </Grid>
  )}

    return (
    <div id="homepage">
      <div id="pageBody">
        {loading ? <Loading/>: <ShowCategories/>}
      </div>
    </div>
  );
}

export default Homepage;