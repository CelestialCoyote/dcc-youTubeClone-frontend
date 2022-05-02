import { useState } from 'react';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';


const App = () => {

    
    const [currentVidID, setCurrentVidID] = useState('XCJwcNmGxRc');
    const [ytResults, setYtResults] = useState([]);

  return (
    <div className="App">
        <TitleBar setYtResults={setYtResults} />
        <VideoPlayer currentVidID={currentVidID} setYtResults={setYtResults} ytResults={ytResults} />
    </div>
  );
};


export default App;
