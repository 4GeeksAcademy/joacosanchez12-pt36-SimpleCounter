import React from "react";

const Digit = (props) => {

    return (
        <div className="card text-bg-dark mb-3 m-1">
            <div className="card-body">
                <h5 className="card-title">{props.digito}</h5>
            </div>
        </div>
    )
}

const SecondsCouter = (props) => {

    return (
        <div className="d-flex">            
            <Digit digito={Math.floor(props.counter /100000 % 10)}/>
            <Digit digito={Math.floor(props.counter /10000 % 10)}/>
            <Digit digito={Math.floor(props.counter /1000 % 10)}/>
            <Digit digito={Math.floor(props.counter /100 % 10)}/>
            <Digit digito={Math.floor(props.counter / 10 % 10)}/>
            <Digit digito={props.counter % 10}/>                                
        </div>
    )
}

export default SecondsCouter;