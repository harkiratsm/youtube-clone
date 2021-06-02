import React from 'react'
import '../css/Videocard.css'
function Videocard({Icon,logochannel, thumbnail ,channelname, title, views, time,Ischecked}) {
    return (
        <div className="video-container">
            <img src={thumbnail}></img>
            <div className="title-con">
                <Icon  className="Avatar-icons" src={logochannel}/>
                
                <div className="view-con">
                    <h4>{title}</h4>
                    <p>{channelname} <Ischecked className="isverified"/><br />{views} &#183; {time}</p>
                </div>
            </div>
        </div>
    )
}

export default Videocard
