//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCouter from "./component/secondsCounter.jsx";

let seconds = 0

//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'))

app.render(<SecondsCouter counter={seconds}/>);

setInterval ( () => {
    seconds++;
    app.render(<SecondsCouter counter={seconds}/>);
},1000) 