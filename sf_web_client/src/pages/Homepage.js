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


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

// CURRENT ISSUES: ROUTING IN NAVIGATION BAR IS NOT WORKING
//                 NEED TO DYNAMICALLY GENERATE PAGES ACCORDING TO CONTENT


const mapStateToProps = (state, ownProps) => ({
  category: state.categoryData.categories,
  content: state.categoryData.contents,
  props: ownProps
});

const mapDispatchToProps = dispatch => ({
  getCategories: id => dispatch(getCategories(id)),
  getContents: id => dispatch(getContents(id)),
});

function Homepage({category, content, props, getCategories, getContents}) {
  const nav = useNavigate();
  var categoryId = null;

  if(props.home) {
    getCategories(categoryId);
    props.home = false;
    getContents(null);
  }

  useEffect(() => {getCategories(categoryId)},[]);


  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const handleClick = (image) => {
    categoryId = image.id; 
    getCategories(image.id); 
    getContents(image.id);
    nav('/home/'+image.id)
  }

  const ShowCategories = () => {
    return (
      <div>
      <ImageList className="imageList" cols={4}>
      {category.map((image) => (
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
      {content && content.map((image) => {
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


  const ShowCategoriescopy = () => {
    return (
        <Grid container spacing={12} >
        {category.categories.map((image) => {
            return(
              <Grid item key={image.id}>
                <ButtonBase sx={{ width: 246, height: 311 }} onClick={() => handleClick(image)}>
                  <Img alt="complex" src={image.thumbnail} className={"categoryItem " + image.id}/>
                </ButtonBase>
              </Grid>
            )
          })}
      </Grid>
  )}

    return (
    <div id="homepage">
      <div id="pageBody">
        {category == [] ? <Loading/>: <ShowCategories/>}
      </div>
    </div>
  );
    }


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);