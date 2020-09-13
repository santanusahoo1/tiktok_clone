import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import "./Video.css";
import VideoSideBar from "./VideoSideBar";



function Video(
    { url,
        channel,
        description,
        song,
        like,
        message,
        share }
) {
    const [playing, setPlay] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    };

    return (
        <div className="video">
            <video className="video_player"
                onClick={onVideoPress}
                ref={videoRef}
                src={url}></video>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSideBar like={like}
                message={message}
                share={share}
            />
        </div>
    )
}

export default Video;
