import './AboutProfile.css';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from 'react';
import axios from '../axios';

const ABOUT_US_URL = '/about-us/'


function AboutProfile(props) {

    const params = useParams();
    const [profile, setProfile] = useState(null);

    async function getAboutUsProfile(id) {
        let url = ABOUT_US_URL + id + '/';
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
                },
                withCredentials: false
        });
        if (response.statusText === "OK") {
            setProfile(response.data);
          }
    } 

    useEffect(() => {
        getAboutUsProfile(params.id);
    }, params.id);

    const ShowAboutUsProfileData = () => {
        return (
        <div className={"aboutUs"}>
            <img
                src={profile.picture}
                alt={profile.display_name}
                loading='lazy'
                className={'profileImage'}
            />
            <span className="bio">
                <h2>{profile.display_name}</h2>
                <div dangerouslySetInnerHTML={{ __html: profile.bio }}  className={"AboutUsProfilePageData"}/>
            </span>
        </div>
        )
    }
    return (
        <div>
        { !profile ? <div/> : <ShowAboutUsProfileData/> }
        </div>
    ); }

export default AboutProfile;