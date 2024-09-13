import React, { useState, useEffect } from 'react';
import Clicker from './components/Clicker';
import Composition from './components/Composition';
import Upgrades from './components/Upgrades';
import { baseInstruments } from './upgrades/baseInstruments';
import { playNote } from './utils/audioUtils';
import './styles/App.css';

function App() {
  const [composition, setComposition] = useState([]);
  const [currentInstrument, setCurrentInstrument] = useState(baseInstruments[0]);
  const [score, setScore] = useState(0);
  const [clickPower, setClickPower] = useState(1);

  const addNote = (note) => {
    setComposition(prev => [...prev, note]);
    setScore(prev => prev + clickPower);
    playNote(note, currentInstrument);
  };

  const buyUpgrade = (cost, power) => {
    if (score >= cost) {
      setScore(prev => prev - cost);
      setClickPower(prev => prev + power);
    }
  };

  const playComposition = () => {
    composition.forEach((note, index) => {
      setTimeout(() => playNote(note, currentInstrument), index * 500);
    });
  };

  return (
    <div className="App">
      <h1>Музыкальный Кликер</h1>
      <div className="score">Очки: {score}</div>
      <Clicker addNote={addNote} instrument={currentInstrument} clickPower={clickPower} />
      <Composition notes={composition} />
      <button onClick={playComposition}>Воспроизвести мелодию</button>
      <select 
        value={currentInstrument} 
        onChange={(e) => setCurrentInstrument(e.target.value)}
      >
        {baseInstruments.map(instrument => (
          <option key={instrument} value={instrument}>{instrument}</option>
        ))}
      </select>
      <Upgrades buyUpgrade={buyUpgrade} score={score} />
    </div>
  );
}

export default App;