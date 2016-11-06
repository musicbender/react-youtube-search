import React from 'react';
import '../scss/video-detail.scss';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading... (may have no results for this term)</div>
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    //same as url = "https://www.youtube.com/embed/" + videoId;
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;