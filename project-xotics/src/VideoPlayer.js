import React from 'react';
import dipvideo1 from './assets/dipping-action-5.mp4'

function VideoPlayer() {


  return (
    <div>
      <video width="320" height="240" autoPlay muted loop>
        <source src={dipvideo1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
