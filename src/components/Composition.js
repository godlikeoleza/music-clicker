import React from 'react';

function Composition({ notes }) {
  return (
    <div>
      <h2>Композиция:</h2>
      <div>{notes.join(' ')}</div>
    </div>
  );
}

export default Composition;