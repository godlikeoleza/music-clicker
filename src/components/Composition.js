import React from 'react';

function Composition({ notes }) {
  return (
    <div className="composition">
      <h2>Композиция:</h2>
      <div className="note-display">
        {notes.map((note, index) => (
          <span key={index} className={`note note-${note}`}>{note}</span>
        ))}
      </div>
    </div>
  );
}

export default Composition;