import React from 'react';
import VideoListItem from './video-list-item.jsx';
import '../scss/video-list.scss';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                video={video} />
        )
    });
    
    return (
        <ul className="col-md-4 list-group video-list-container">
            {videoItems}
        </ul>
    )
}

export default VideoList;
