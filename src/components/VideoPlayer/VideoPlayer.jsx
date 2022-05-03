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
                {<h2>Title: {props.currentVideoInfo.items[0].snippet.title}</h2>};
            </div>
            
        </div>

    );
}
 

export default VideoPlayer;
