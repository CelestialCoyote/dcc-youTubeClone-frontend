import SearchBar from "../SearchBar/SearchBar";


const TitleBar = ({setYtResults}) => {
    return ( 
        <div id='title-bar'>
            <label id='title-bar-label'>YouTubeClone</label>
            <SearchBar setYtResults={setYtResults}/>
        </div>

    );
}
 

export default TitleBar;
