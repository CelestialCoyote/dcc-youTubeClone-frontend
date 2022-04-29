import './App.css';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';


const App = () => {
  return (
    <div className="App">
        <TitleBar />
        <VideoPlayer />
    </div>
  );
};


export default App;
