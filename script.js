// import React from "./react-app/node_modules/react"
// import ReactDOM from './react-app/node_modules/react-dom/client';

var navbar = (
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width={50}></img>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    navbar
);