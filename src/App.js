import { useState } from 'react';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';


const App = () => {

    const [recommendedVideos, setRecommendedVideos] = useState([]);


  return (
    <div className="App">
        <TitleBar setRecommendedVideos={setRecommendedVideos}/>
        <VideoPlayer />
    </div>
  );
};


export default App;
