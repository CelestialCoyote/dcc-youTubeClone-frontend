import { useState } from 'react';
import axios from 'axios';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import RelatedVideo from './components/RelatedVideo/RelatedVideo';
import defaultVideo from './data/defaultVideoInfo';
import defaultRelatedVideos from './data/defaultVideoRelatedVideos';


const App = () => {
    const [ytResults, setYtResults] = useState(defaultRelatedVideos.items);
    const [currentVideoInfo, setCurrentVideoInfo] = useState(defaultVideo);
    const [currentVideoID, setCurrentVideoID] = useState(currentVideoInfo.items[0].id);

    return (
        <div className="App">
            <TitleBar setYtResults={setYtResults} />

            <button>Set Default</button>
            
            <div className="flex-column">
                {/*<VideoPlayer currentVideoID={currentVideoID} setYtResults={setYtResults} ytResults={ytResults} />*/}
                <div id="mainPlayerComments">
                    <VideoPlayer currentVideoInfo={currentVideoInfo} currentVideoID={currentVideoID} />
                </div>
                <ul>
                    {ytResults.map(vid => <li> <RelatedVideo vid={vid} /> </li>)}
                </ul>
            </div>
            
        </div>
    );
};


export default App;
