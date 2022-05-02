import SearchBar from "../SearchBar/SearchBar";


const TitleBar = ({setRecommendedVideos}) => {
    return ( 
        <div id='title-bar'>
            <label id='title-bar-label'>YouTubeClone</label>
            <SearchBar setRecommendedVideos={setRecommendedVideos}/>
        </div>

    );
}
 

export default TitleBar;
