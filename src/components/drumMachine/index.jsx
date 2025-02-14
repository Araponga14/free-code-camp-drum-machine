import DrumPad from '../drumPad';
import styles from './DrumMachine.module.css'
import { useState } from 'react'

function DrumMachine() {
  const [soundName, setSoundName] = useState('');

  const drumPads = [
    { keyTrigger: "Q", sound: "src/assets/christmas-bell.mp3", name: "Christmas Bell" },
    { keyTrigger: "W", sound: "src/assets/crash-cymbal.mp3", name: "Crash Cymbal" },
    { keyTrigger: "E", sound: "src/assets/deep-impact.wav", name: "Deep Impact" },
    { keyTrigger: "A", sound: "src/assets/dry-drum.mp3", name: "Dry Drum" },
    { keyTrigger: "S", sound: "src/assets/heavy-drum.mp3", name: "Heavy drum" },
    { keyTrigger: "D", sound: "src/assets/kick-2.mp3", name: "Kick 2" },
    { keyTrigger: "Z", sound: "src/assets/kick.mp3", name: "Kick" },
    { keyTrigger: "X", sound: "src/assets/long-ride-cymbal.mp3", name: "LR Cymbal" },
    { keyTrigger: "C", sound: "src/assets/triangle.mp3", name: "Triangle" },
  ];

  return (

    <div id="drum-machine" className={styles['drum-machine']}>

      <div className={styles["pads-container"]} id="pads-container">
        {drumPads.map((pad, index) => (
            <DrumPad
              key={index}
              id={pad.name}
              keyTrigger={pad.keyTrigger}
              sound={pad.sound}
              name={pad.name}
              setSoundName={setSoundName}
            />
          ))}

      </div>

      <div id="display" className={styles.display}>
        <span>{soundName}</span>
      </div>
       
    </div>
  )
}


export default DrumMachine
