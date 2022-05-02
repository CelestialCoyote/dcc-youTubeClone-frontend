const VideoPlayer = (props) => {

    return (

        <div className="videoPlayer">
            <iframe
                title="ytPlayer"
                id="ytPlayer"
                typeof="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${props.currentVidID}?autoplay=1&origin=http://example.com`}
                frameBorder="0"
            />
            <div>
                {props.ytResults.length > 0 ? <h3>Title: {props.ytResults[0].snippet.title}</h3> : props.currentVidID.title};
            </div>
            
        </div>

    );
}
 

export default VideoPlayer;
