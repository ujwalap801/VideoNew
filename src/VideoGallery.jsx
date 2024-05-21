import React from 'react';
import VideoPlayer from './VideoPlayer';
import './VideoGallery.css';
import video1 from './video.mp4';
import video2 from './video.mp4';
import video3 from './video.mp4';
import video4 from './video.mp4';
import video5 from './video.mp4';
import video6 from './video.mp4';
import video7 from './video.mp4';
import video8 from './video.mp4';
import video9 from './video.mp4';
import video10 from './video.mp4';

const videoFiles = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
];


const VideoGallery = () => {
    return (
      <div className="video-gallery">
        {videoFiles.map((video, index) => (
          <VideoPlayer key={index} src={video} />
        ))}
      </div>
    );
  };
  
  export default VideoGallery;