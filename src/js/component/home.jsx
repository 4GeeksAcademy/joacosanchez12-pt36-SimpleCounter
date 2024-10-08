import React from "react";
import SecondsCounter from "./secondsCounter";

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
        document.getElementById("seconds-counter").innerText = seconds;
    };


    startTimer();

    return (
        <div id="timer-container">
            <div className="clock-icon">
                <i className="far fa-clock"></i>
            </div>
            <div className="counter-text" id="seconds-counter">{seconds}</div>
            <div className="button-container">
                <button onClick={startTimer} className="button">Start</button>
                <button onClick={stopTimer} className="button">Stop</button>
                <button onClick={resetTimer} className="button">Reset</button>
                <button onClick={resumeTimer} className="button">Resume</button>
            </div>
        </div>
    );
};

export default Home;