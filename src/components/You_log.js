import React from 'react'
import '../css/You_log.css'
function You_log({thumbnail,title,sub,vid,desc}) {
    return (
        <div className="video-logo-container">
            <img src={thumbnail}></img>
            <div className="title-logo-con">                
                <div className="view-logo-con">
                    <h4>{title}</h4>
                    <p>{sub} subscribers  &#183; {vid} videos</p>
                    <p className="desc-con">{desc}</p>
                </div>
            </div>
            <div className="Subscribe-btn">
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default You_log
