import React from 'react';
import { playNote } from '../utils/audioUtils';

function Clicker({ addNote, instrument }) {
  const handleClick = () => {
    const note = ['C', 'D', 'E', 'F', 'G', 'A', 'B'][Math.floor(Math.random() * 7)];
    addNote(note);
    playNote(note, instrument);
  };

  return <button onClick={handleClick}>Добавить ноту</button>;
}

export default Clicker;