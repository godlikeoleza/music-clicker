const audioContext = new (window.AudioContext || window.webkitAudioContext)();

export function playNote(note, instrument) {
  const oscillator = audioContext.createOscillator();
  oscillator.type = instrument;
  const freq = 440 * Math.pow(2, ['C', 'D', 'E', 'F', 'G', 'A', 'B'].indexOf(note) / 12);
  oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.2);
}