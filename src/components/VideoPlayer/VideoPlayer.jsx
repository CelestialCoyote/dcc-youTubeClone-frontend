const VideoPlayer = (props) => {

    return (

        <div className="">
            <iframe
                title="ytPlayer"
                id="ytPlayer"
                typeof="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${props.currentVideoID}?autoplay=1&origin=http://example.com`}
                frameBorder="0"
            />
            <div>
                {props.ytResults.length > 0 ? <h2>Title: {props.ytResults[0].snippet.title}</h2> : props.currentVidID.title};
            </div>
            
        </div>

    );
}
 

export default VideoPlayer;
