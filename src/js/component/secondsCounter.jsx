import React from "react";

const SecondsCounter = ({ seconds }) => {
    
    const five = Math.floor(seconds / 10000) % 10; 
    const four = Math.floor(seconds / 1000) % 10; 
    const three = Math.floor(seconds / 100) % 10; 
    const two = Math.floor(seconds / 10) % 10;
    const one = Math.floor(seconds / 1) % 10;

    return (
        <div className="counter-container">
            <div className="counter-box clock-icon">
                <i className="far fa-clock"></i> {/* Iria un icono :) */}
            </div>
            <div className="counter-box">{five}</div>
            <div className="counter-box">{four}</div>
            <div className="counter-box">{three}</div>
            <div className="counter-box">{two}</div>
            <div className="counter-box">{one}</div>
        </div>
    );
};

export default SecondsCounter;