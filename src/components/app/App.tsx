import React from 'react';
import ControlPanel from '../control-panel/ControlPanel';
import Grid from '../grid/Grid';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-container">
        <div className="App-col App-col-side"></div>
        <div className="App-col App-col-middle">
          <Grid/>
        </div>
        <div className="App-col App-col-side">
          <ControlPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
