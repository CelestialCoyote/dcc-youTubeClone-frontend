const VideoPlayer = (props) => {

    return (

        <div>
            <div className="aspect-ratio--16x9">
                <div className="aspect-ratio__inner-wrapper">
                    <iframe
                        className="youtube-video"
                        title="ytPlayer"
                        id="ytPlayer"
                        typeof="text/html"
                        src={`https://www.youtube.com/embed/${props.currentVideoID}?autoplay=1&origin=http://example.com`}
                        frameBorder="0"
                    />
                </div>
            </div>

            <div>
                <h2 id="currentVideoTitle">{props.currentVideoInfo.items[0].snippet.title}</h2>
                <div className="flex-row infoTextContainer">
                    <label className="infoText">{props.currentVideoInfo.items[0].statistics.viewCount} views</label>
                    <label className="infoText">{props.currentVideoInfo.items[0].statistics.likeCount} likes</label>
                    <label className="infoText">{props.currentVideoInfo.items[0].statistics.dislikeCount} dislikes</label>
                </div>
                <div id="videoDescription" className="flex-column">
                    <label id="channelTitle">{props.currentVideoInfo.items[0].snippet.channelTitle}</label>
                    <label id="videoDescription">{props.currentVideoInfo.items[0].snippet.description}</label>
                </div>
            </div>

        </div>

    );
};


export default VideoPlayer;
