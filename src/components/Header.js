import React from 'react'
import '../css/Header.css';
import profile from '../static/profile.jpg'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MicIcon from '@material-ui/icons/Mic';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
import {useState} from 'react';
import Tooltip from "@material-ui/core/Tooltip";
import { Toll } from '@material-ui/icons';
function Header({handleclick,searchlol,searchlol1}) {
    const [termFromSearchBar,settermFromSearchBar]=useState("");
    return (
        <div className="header-container">
            <div className="header-left">
                <MenuIcon />
                <Link to={"/"}>
                    <img  id="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt='dsada'></img>
                </Link>
            </div>
            <div className="header-middle">
                <div className="search-bar">
                    <input id="search" type="text" onChange={e => settermFromSearchBar(e.target.value) } value={termFromSearchBar} placeholder="Search"></input>
                    <button 
                        onClick={()=>{
                            searchlol()
                            searchlol1()
                            handleclick(termFromSearchBar)
                            
                        }}><Link  to={`./search`}><SearchIcon className="search-btn" /></Link></button>
                    
                </div>
                <Tooltip title="Search with Mic">
                    <MicIcon className="mic-btn"/>
                </Tooltip>
            </div>
            <div className="header-right">
                <Tooltip title="Create">
                    <VideoCallIcon id="video-btn"/>
                </Tooltip>
                
                <Tooltip  title="YouTube apps" aria-label="add">
                    <AppsIcon id="app-btn"/>
                </Tooltip>
                <Tooltip title="Notifications">
                    <NotificationsIcon id="notification-btn"/>
                </Tooltip>
                <Tooltip>
                    <Avatar id="avatar-btn" src={profile} />
                </Tooltip>
                
            </div>
            
        </div>
    )
}

export default Header
