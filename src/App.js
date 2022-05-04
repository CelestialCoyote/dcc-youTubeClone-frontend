import { useState } from 'react';
import axios from 'axios';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import RelatedVideoContainer from './components/RelatedVideoContainer/RelatedVideoContainer';
import defaultVideo from './data/defaultVideoInfo';
import defaultRelatedVideos from './data/defaultVideoRelatedVideos';
import CommentsContainer from './components/CommentsContainer/CommentsContainer';


const App = () => {
    const [ytResults, setYtResults] = useState(defaultRelatedVideos.items);
    const [currentVideoInfo, setCurrentVideoInfo] = useState(defaultVideo);
    const [currentVideoID, setCurrentVideoID] = useState(currentVideoInfo.items[0].id);
    const [comments, setComments] = useState(currentVideoInfo.items[0].id)

    return (
        <div className="App">
            <TitleBar setYtResults={setYtResults} />
            
            <div className="flex-row">
                <div id="mainPlayerComments">
                    <VideoPlayer currentVideoInfo={currentVideoInfo} currentVideoID={currentVideoID} />
                    <CommentsContainer currentVideoID={currentVideoID} setComments={setComments}/>
                </div>
                <RelatedVideoContainer ytResults={ytResults} />
            </div>
            
        </div>
    );
};


export default App;
