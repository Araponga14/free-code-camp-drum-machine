import { useRef, useEffect } from "react";
import "./DrumPad.module.css";

export default function DrumPad({ keyTrigger, sound, name, setSoundName }) {
    const audioRef = useRef(null);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; 
            audioRef.current.play();
            setSoundName(name);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key.toUpperCase() === keyTrigger) { // Garante que a tecla é a certa
            handlePlay();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <div className="drum-pad" id={keyTrigger} onClick={handlePlay}>
            {keyTrigger}
            <audio id={keyTrigger} className="clip" ref={audioRef} src={sound}></audio>
        </div>
    );
}
