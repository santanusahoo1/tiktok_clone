import React, { useState, useEffect } from 'react';
import Video from "./Video";
import db from "./firebase";
import './App.css';


function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return (
    <div className="app">
      <div className="app_video">
        {videos.map(({ url, channel, description, song, like, message, share }) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            like={like}
            message={message}
            share={share}
          />
        )
        )};
      </div>
    </div>
  );
}

export default App;
