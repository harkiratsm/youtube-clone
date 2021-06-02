import React from 'react';
import '../css/Aside.css';
import HomeIcon from '@material-ui/icons/Home';
import Siderow from './Siderow'
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import Subscriptions from './Subscriptions'
function Aside() {
    return (
        <div className="aside-container">
            <Siderow selected Icon={HomeIcon} title="Home"/>
            <Siderow Icon={ExploreIcon} title="Explore"/>
            <Siderow Icon={SubscriptionsIcon} title="Subscriptions"/>
            <hr/>
            <Siderow Icon={VideoLibraryIcon} title="Library"/>
            <Siderow Icon={HistoryIcon} title="History"/>
            <Siderow Icon={WatchLaterIcon} title="Watch Later"/>
            <Siderow Icon={ThumbUpAltIcon} title="Liked Videos"/>
            <hr />
            <h2 className="sub-header">SUBSCRIPTIONS</h2>
            <Subscriptions  Icon={Avatar} channelname="Anuj Bhaiya" imglogourl="https://yt3.ggpht.com/ytc/AAUvwng_Js0arTyfnyCjHXpnvhQFB8AiaPQbDC2I86kA=s88-c-k-c0x00ffffff-no-rj"/>
            <Subscriptions isnew Icon={Avatar} channelname="Code For Cause" imglogourl="https://yt3.ggpht.com/ytc/AAUvwnhpLAOxx0GesrqkAMyNs3Fd3ZULf8yfNc8nTmMp=s88-c-k-c0x00ffffff-no-rj"/>
            <Subscriptions isnew Icon={Avatar} channelname="Love Babar" imglogourl="https://yt3.ggpht.com/ytc/AAUvwniuiil3MsNvPltVwGbgyVArM0iMBtfTe00CcHNN=s176-c-k-c0x00ffffff-no-rj-mo"/>
            <Subscriptions  Icon={Avatar} channelname="Masked Wolf" imglogourl="https://yt3.ggpht.com/ytc/AAUvwniOqyMjq2p_1MoQ6cH9jWN6SUOjrCHNoReYU2OngA=s88-c-k-c0x00ffffff-no-rj"/>
            
        </div>
    )
}

export default Aside
