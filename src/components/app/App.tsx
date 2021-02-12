import React from 'react';
import Grid from '../grid/Grid';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-container">
        <Grid sizeX={10} sizeY={10} />
      </div>
    </div>
  );
}

export default App;
