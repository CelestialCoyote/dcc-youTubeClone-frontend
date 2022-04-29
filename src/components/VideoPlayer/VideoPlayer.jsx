import React, { useState, useEffect } from "react";


const VideoPlayer = (props) => {

    const [currentVidID, setCurrentVidID] = useState('XCJwcNmGxRc');

    return ( 
        <div>
            <iframe
                title="ytPlayer"
                id="ytPlayer"
                typeof="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${currentVidID}?autoplay=1&origin=http://example.com`}
                frameBorder="0"
            ></iframe>
        </div>

    );
}
 

export default VideoPlayer;
