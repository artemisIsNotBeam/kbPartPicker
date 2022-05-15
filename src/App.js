import CustomPart from './AppChild.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="titHeading">
        <h1 id="theTitle">Kb partpicker<img id="iconPng" src="https://cdn1.iconfinder.com/data/icons/video-game-filled-line/32/switch-mechanical-keyboard-keycap-512.png"></img> </h1>
      </div>
      <CustomPart/>

      <div>
        <button>import</button>
        <button>export</button>
        <p>import and export coming soon</p>
      </div>
    </div>
  );
}

export default App;
