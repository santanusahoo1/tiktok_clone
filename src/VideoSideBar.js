import React, { useState } from "react";
import "./VideoSideBar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import MessageIcon from "@material-ui/icons/Comment";

function VideoSideBar({ like, message,share }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSideBar">
            <div className="videoSidebar_button">
                {liked ? (
                    <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
                ) : (
                        <FavoriteBorderIcon fontSize="large" 
                        onClick={(e) => setLiked(true)} />
                    )};
                    <p>{liked ? like + 1 : like}</p>
            </div>
            <div className="videoSidebar_button">
                <MessageIcon />
                <p>{message}</p>
            </div>
            <div className="videoSidebar_button">
                <ShareIcon />
                <p>{share}</p>
            </div>
        </div>
    );
}

export default VideoSideBar;
