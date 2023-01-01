const audioContext = new AudioContext();

const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626, active: false },
  { note: "Db", key: "S", frequency: 277.183, active: false },
  { note: "D", key: "X", frequency: 293.665, active: false },
  { note: "Eb", key: "D", frequency: 311.127, active: false },
  { note: "E", key: "C", frequency: 329.628, active: false },
  { note: "F", key: "V", frequency: 349.228, active: false },
  { note: "Gb", key: "G", frequency: 369.994, active: false },
  { note: "G", key: "B", frequency: 391.995, active: false },
  { note: "Ab", key: "H", frequency: 415.305, active: false },
  { note: "A", key: "N", frequency: 440, active: false },
  { note: "Bb", key: "J", frequency: 466.164, active: false },
  { note: "B", key: "M", frequency: 493.883, active: false },
];

document.addEventListener("keydown", (e) => {
  // guard clause. used for keys being held down by user.
  if (e.repeat) return;
  const keyboardKey = e.code;
  const noteDetail = getNoteDetail(keyboardKey);

  if (noteDetail == null) return;

  noteDetail.active = true;
  playNotes();
});

document.addEventListener("keyup", (e) => {
  const keyboardKey = e.code;
  const noteDetail = getNoteDetail(keyboardKey);

  if (noteDetail == null) return;

  // not is not actively being played
  noteDetail.active = false;
  playNotes();
});

// this function gets the individual note thats being played
function getNoteDetail(keyboardKey) {
  // using the find method to get one individual note from the array of notes
  return NOTE_DETAILS.find((n) => `Key${n.key}` === keyboardKey);
}

function playNotes() {
  NOTE_DETAILS.forEach((n) => {
    //checking to see if the data attributes have a data note set to the note of the actual note detail were checking
    const keyElement = document.querySelector(`[data-note="${n.note}"]`);
    keyElement.classList.toggle("active", n.active);
    // if the oscillator is playing we need to stop it
    if (n.oscillator != null) {
      n.oscillator.stop();
      n.oscillator.disconnect();
    }
  });
  // filtering to only get certain properties which are the notes that only have active set to true
  const activeNotes = NOTE_DETAILS.filter((n) => n.active);
  // we cant have all notes playing at 100% so we need to adjust the gain
  const gain = 1 / activeNotes.length;
  // looping through active notes
  activeNotes.forEach((n) => {
    // n = passing in the note were trying to play
    startNote(n, gain);
  });
}

function startNote(noteDetail, gain) {
  // percentage of volume
  const gainNode = audioContext.createGain();
  // setting or reducing the volume based on how many notes we play
  gainNode.gain.value = gain;
  // brand new oscillator
  const oscillator = audioContext.createOscillator();
  // details from our note
  oscillator.frequency.value = noteDetail.frequency;
  // telling the oscillator how to behave / type of oscillator
  oscillator.type = "sine";
  // connecting oscillator to audio context / speakers
  oscillator.connect(gainNode).connect(audioContext.destination);
  // telling the oscillator to start playing
  oscillator.start();
  //stopping ans saving note. saving to global variable for access evrywhere.
  noteDetail.oscillator = oscillator;
}
