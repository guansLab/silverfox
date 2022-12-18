import './About.css';
import { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';


const styles = theme => ({
  imageListItemBar:{
    fontSize:'0.7em',//Insert your required size
  }
});


const ABOUT_US_URL = '/about-us/'

function About(props) {
  const nav = useNavigate();
  const [profiles, setProfiles] = useState([]);
  
  async function getProfiles() {
    const response = await axios.get(ABOUT_US_URL, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: false
    });
    if (response.statusText === "OK") {
      setProfiles(response.data.results);
    }
  }

  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <div className='pageBody'>
        <ImageList sx={{ width: "100%", height:'auto' }} cols={5} gap={10}>
        {profiles && profiles.map((profile) => (
          <Card key={profile.id} onClick={() => nav("/about/" + profile.id)} sx={{height:'400px'}}>
            <ImageListItem sx={{height:'100% !important'}}>
              <img
              src={profile.picture}
              alt={profile.display_name}
              loading='lazy'
              className={'image'}
              />
              <ImageListItemBar
                title={profile.display_name}
                subtitle={profile.title}
              />
            </ImageListItem>
          </Card>
        ))}
    </ImageList>
    </div>
  );
}

export default About;