import React from 'react';

const VideoList = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
      

        // const video = props.video;
        return ( < li className = "list-group-item" >
            <div className = "video-list media" >
                <div className = "media-left" >
                    <img src={imageUrl} className="media-object"/>
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div> </li> );
        }

        export default VideoList;