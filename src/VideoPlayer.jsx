import React from 'react';

const VideoPlayer = ({ src }) => {
  return (
    <video width="300" height="200" controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
