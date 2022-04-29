import React, { useState, useEffect } from "react";


const VideoPlayer = (props) => {

    const [currentVidID, setCurrentVidID] = useState('XCJwcNmGxRc');

    return ( 
        <div className="video-responsive">
            <iframe
                title="ytPlayer"
                id="ytPlayer"
                typeof="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${currentVidID}?autoplay=1&origin=http://example.com`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
            />
        </div>

    );
}
 

export default VideoPlayer;
