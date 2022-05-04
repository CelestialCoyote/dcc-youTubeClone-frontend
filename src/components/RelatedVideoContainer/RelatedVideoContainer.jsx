import RelatedVideo from "../RelatedVideo/RelatedVideo";


const RelatedVideoContainer = (props) => {

    return (

        <div id="relatedVideoContainer">
            <ul>
                {props.ytResults.map(vid =>
                    <li key={vid.id.videoId}>
                        <RelatedVideo setCurrentVideoID={props.setCurrentVideoID} vid={vid} />
                    </li>)}
            </ul>
        </div>

    );
}


export default RelatedVideoContainer;
