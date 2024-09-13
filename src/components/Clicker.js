import React, { useState } from 'react';
import { playNote } from '../utils/audioUtils';

function Clicker({ addNote, instrument, clickPower }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    const note = ['C', 'D', 'E', 'F', 'G', 'A', 'B'][Math.floor(Math.random() * 7)];
    addNote(note);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 100);
  };

  return (
    <button 
      onClick={handleClick} 
      className={`clicker ${isAnimating ? 'animate' : ''}`}
    >
      Добавить ноту (x{clickPower})
    </button>
  );
}

export default Clicker;