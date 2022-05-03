const RelatedVideo = (props) => {

    return (

        <div id="relatedVideoContainer">
            
            <img
                src={props.vid.snippet.thumbnails.default.url} alt='thumbnail'
                width={240}
                height={180}
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
