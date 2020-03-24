import React from "react";
import { Synth, Player, Transport } from "tone";

//play a middle 'C' for the duration of an 8th note
function App() {
    return (
        <div className="App">
            <button
                onClick={() => {
                    // const synth = new Synth().toMaster();
                    // synth.triggerAttackRelease("C4", "8n");
                    //will play as soon as it's loaded
                    // new Transport();
                    //repeated event every 8th note
                    Transport.scheduleRepeat(function(time) {
                        //do something with the time
                        console.log("-");

                        var player = new Player({
                            url: "./1.ogg",
                            autostart: true
                        }).toMaster();
                    }, "2");

                    Transport.start();
                }}
            >
                Sound
            </button>
        </div>
    );
}

export default App;
