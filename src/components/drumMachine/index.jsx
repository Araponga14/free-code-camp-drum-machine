import DrumPad from '../drumPad';
import styles from './DrumMachine.module.css'
import { useState } from 'react'

function DrumMachine() {
  const [soundName, setSoundName] = useState('');

  const drumPads = [
    { keyTrigger: "Q", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3", name: "Christmas Bell" },
    { keyTrigger: "W", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3", name: "Crash Cymbal" },
    { keyTrigger: "E", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3", name: "Deep Impact" },
    { keyTrigger: "A", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3", name: "Dry Drum" },
    { keyTrigger: "S", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3", name: "Heavy drum" },
    { keyTrigger: "D", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3", name: "Kick 2" },
    { keyTrigger: "Z", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3", name: "Kick" },
    { keyTrigger: "X", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3", name: "LR Cymbal" },
    { keyTrigger: "C", sound: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3", name: "Triangle" },
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
