import { useParams } from "react-router-dom";
import { useEffect } from "react";
import './ContentPage.css';
import React, { useState } from 'react';
import { getResult } from "./AxiosHelper";


const CONTENTS_URL = '/content/'

  
function ContentPage(props) {

    const params = useParams();
    const [contentPage, setContentPage] = useState(null);

    async function getContentPage(id) {
        let url = CONTENTS_URL + id + '/';
        const response = await getResult(url);
        if (response.statusText === "OK") {
          setContentPage(response.data);
          }
    } 
    
    useEffect(() => {
        getContentPage(params.id);
        console.log(contentPage);
    }, []);

    const ShowContentPageData = () => {
        return (
        <div className={"contentPageData"}>
                <h1>
                    {contentPage.title}
                </h1>
        <div dangerouslySetInnerHTML={{ __html: contentPage.body }} />
        </div>
        )
    }
    return (
        <div>
        { !contentPage ? <div/> : <ShowContentPageData/> }
        </div>
    ); }

export default ContentPage;