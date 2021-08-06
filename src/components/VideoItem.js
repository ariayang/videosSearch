import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  //     // video.id.videoId => key
  //     // video.snippet.description => alt
  //     // video.snippet.thumbnails.default.url => url

  return (
    <div
      key={video.id.videoId}
      className="item video-item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;