import { useParams } from "react-router-dom";
import { useEffect } from "react";
import './TopNewsContent.css';
import React, { useState } from 'react';
import axios from '../axios';

const TOPNEWS_URL = '/top-news/'


function TopNewsContentPage(props) {

    const params = useParams();
    const [topNewsContent, setTopNewsContent] = useState(null);

    async function getTopNewsContent(id) {
        let url = TOPNEWS_URL + id + '/';
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
                },
                withCredentials: false
        });
        if (response.statusText === "OK") {
            setTopNewsContent(response.data);
          }
    } 

    useEffect(() => {
        getTopNewsContent(params.id);
    }, params.id);

    const ShowTopNewsContentData = () => {
        return (
        <div >
                <h1 className={"topNewsContentPageTitle"}>
                    {topNewsContent.title}
                </h1>
        <div dangerouslySetInnerHTML={{ __html: topNewsContent.body }}  className={"topNewsContentPageData"}/>
        </div>
        )
    }
    return (
        <div>
        { !topNewsContent ? <div/> : <ShowTopNewsContentData/> }
        </div>
    ); }

export default TopNewsContentPage;