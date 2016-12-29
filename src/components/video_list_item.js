import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  console.log({video})
  const imageUrl = video.snippet.thumbnails.default.url;
  //urlName = "youtube.com/watch?v=" + {video.id.videoId};
  return (
    <li className="list-group-item" onClick={() => {onVideoSelect(video)}}>
    <div className="video-list-media">
      <div className="media-left">
        <img className="media-object" src={imageUrl}/>
      </div>
      <div className="media-body">
        <div className="media-heading">
          {video.snippet.title}
        </div>
      </div>
    </div>
    </li>
  )
};

export default VideoListItem;
