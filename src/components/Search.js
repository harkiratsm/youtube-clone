import React from 'react'
import '../css/Search.css'
import youtube from './youtube'
import You_log from './You_log'
import {useState,useEffect} from 'react'
import Clut from './Clut'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Avatar from '@material-ui/core/Avatar';

function Search({videos,newdata,backdata}) {
    console.log("👽",videos)
    console.log("🎮",newdata)
    console.log("🚀",backdata)
    
    const rendervid=videos.map((i,index)=>{
        const link=newdata[index]
        const link1=backdata[index]
        if(i.id.kind==="youtube#channel"){
                    //  newdata.statistics.subscriberCount
               
            return <You_log thumbnail={i.snippet.thumbnails.medium.url} key={i.etag} title={link?.snippet?.title} sub={link?.statistics?.subscriberCount} desc={link?.snippet?.description} vid={link?.statistics?.videoCount}></You_log>
        }
        else{
            return <Clut Icon={Avatar} description={i.snippet.description} Ischecked={CheckCircleIcon} logochannel={link?.snippet.thumbnails.high.url} key={i.etag} thumbnail={i.snippet.thumbnails.medium.url} title={i.snippet.title} channelname={link?.snippet?.title} views={link1?.statistics?.viewCount} time={i?.snippet?.publishedAt} />
        }
    });
    return (
        <div className="search-container">
            <div>
                {rendervid}
            </div>
            
        </div>
    )
}

export default Search
