import React, { useState } from 'react';
import Clicker from './components/Clicker';
import Composition from './components/Composition';
import { baseInstruments } from './upgrades/baseInstruments';
import './styles/App.css';

function App() {
  const [composition, setComposition] = useState([]);
  const [currentInstrument, setCurrentInstrument] = useState(baseInstruments[0]);

  const addNote = (note) => {
    setComposition([...composition, note]);
  };

  return (
    <div className="App">
      <h1>Музыкальный Кликер</h1>
      <Clicker addNote={addNote} instrument={currentInstrument} />
      <Composition notes={composition} />
      <select 
        value={currentInstrument} 
        onChange={(e) => setCurrentInstrument(e.target.value)}
      >
        {baseInstruments.map(instrument => (
          <option key={instrument} value={instrument}>{instrument}</option>
        ))}
      </select>
    </div>
  );
}

export default App;