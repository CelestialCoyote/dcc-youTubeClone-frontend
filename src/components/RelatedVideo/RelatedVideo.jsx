const RelatedVideo = (props) => {

    const imageClick = () => {
        console.log(`Click.  Video ID = ${props.vid.id.videoId}`);
        props.setCurrentVideoID(props.vid.id.videoId);
    }

    return (

        <div className="flex-row">
            
            <img
                src={props.vid.snippet.thumbnails.default.url} alt='thumbnail'
                width={240}
                height={180}
                onClick={() => imageClick()}
            />

            <div className="widthFifty">
                <p className="relatedVideoTitleText">{props.vid.snippet.title}</p>
                <p>{props.vid.snippet.channelTitle}</p>

                <div className="flex-row">
                    <p>Views</p>
                    <p>{props.vid.snippet.publishTime}</p>
                </div>
            </div>
            
        </div>

    );
}
 

export default RelatedVideo;
