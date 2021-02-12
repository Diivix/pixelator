import React from 'react';
import ControlPanel from '../control-panel/ControlPanel';
import Grid from '../grid/Grid';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-container">
        <ControlPanel/>
        <Grid sizeX={10} sizeY={10} />
      </div>
    </div>
  );
}

export default App;
