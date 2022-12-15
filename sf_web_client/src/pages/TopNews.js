import './TopNews.css'
import { useEffect, useState } from "react";
import axios from '../axios';
import right_arrow from "../arrow-3-64.ico";
import left_arrow from "../arrow-94-64.ico";
import { useNavigate, useParams } from 'react-router-dom';


const TOP_NEWS_URL = "/content/";

function TopNews(){

    const [topNews, setTopNews] = useState(null);
    const [displayIndex, setDisplayIndex] = useState(0);
    const nav = useNavigate();

    async function getTopNews() {
        const response = await axios.get(TOP_NEWS_URL, {
            headers: {
            'Content-Type': 'application/json'
            },
            withCredentials: false
        });
        setTopNews(response.data.results);
        setDisplayIndex(0);
        console.log(response.data.results);
    };

    useEffect(() => {

        getTopNews();
    
    }, []);

    const handleClick = (direction) => {
        if(direction === "left"){
            if (displayIndex == 0){
                setDisplayIndex(topNews.length-1);
            }
            else{
                setDisplayIndex(displayIndex-1);
            }
        }
        else if(direction === "right"){
            if (displayIndex == topNews.length-1){
                setDisplayIndex(0);
            }
            else{
                setDisplayIndex(displayIndex+1);
            }
        }
    }

    const ShowTopNews = () => {
        return (
            <div className={"topNewsContainer"}>
                <div className={"topNewsText"}>Top News</div>
                <div className={"topNewsInnerContainer"}>
                <div className={"topNewsLeftButtonDiv"}>
                    <img src={left_arrow} className={"topNewsLeftButton"} onClick={() => {handleClick("left")}}></img>
                </div>
                <div className="topNewsContent"  onClick={() => {nav('/top-news/'+topNews[displayIndex].id)}}>
                    {topNews[displayIndex].title}
                </div>
                <div className={"topNewsRightButtonDiv"}>
                    <img src={right_arrow} className={"topNewsRightButton"} onClick={() => {handleClick("right")}}></img>
                </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {topNews == null ? <div></div>:<ShowTopNews/> }
        </div>
    );

}

export default TopNews;