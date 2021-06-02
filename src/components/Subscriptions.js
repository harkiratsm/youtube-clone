import React from 'react'
import '../css/Subscriptions.css'

function Subscriptions({isnew,Icon,channelname,imglogourl}) {
    return (
        <div className="sub-container">
            <Icon className="icons" src={imglogourl}/>
            <h2 className="channel">{channelname}</h2>
            
        </div>
    )
}

export default Subscriptions
