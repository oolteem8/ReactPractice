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

function Navbar() {
    return (
        <header>
            <nav className="nav-items">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
                </div>

                <ul className="unordered-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1 className="main-header">Fun facts about React</h1>
            <ul className="facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer-container">
            <p>© oolteem8 development. All rights reserved.</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <Navbar />
        <MainContent />
        <Footer />
    </div>
);