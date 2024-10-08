import React from "react";
import SecondsCounter from "./secondsCounter";

//import img
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    let seconds = 0; 
    let intervalId = null; 
    let isPaused = false; 

    const startTimer = () => {
        if (!intervalId && !isPaused) {
            intervalId = setInterval(() => {
                seconds += 1;
                updateDisplay(); 
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(intervalId);
        intervalId = null;
        isPaused = true; 
    };

    const resumeTimer = () => {
        if (isPaused) {
            startTimer(); 
            isPaused = false; 
        }
    };

    const resetTimer = () => {
        clearInterval(intervalId);
        intervalId = null;
        seconds = 0;
        isPaused = false; 
        updateDisplay(); 
    };

    const updateDisplay = () => {
        const container = document.getElementById("timer-container");
        if (container) {
            container.innerHTML = `
                <p>Segundos: ${seconds}</p>
                <button id="reset-button" class="reset-button">Reset Timer</button>
                <button id="stop-button" class="stop-button">Stop Timer</button>
                <button id="resume-button" class="resume-button">Resume Timer</button>
            `;
           
            document.getElementById("reset-button").onclick = resetTimer;
            document.getElementById("stop-button").onclick = stopTimer;
            document.getElementById("resume-button").onclick = resumeTimer;
        }
    };

    
    startTimer();

    
    updateDisplay();

    return (
        <div id="timer-container">
            {/*  */}
        </div>
    );
};

export default Home;