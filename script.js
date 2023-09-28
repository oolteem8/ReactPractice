// import React from 'react'
// import ReactDOM from 'react-dom'

function Page() {
    return (
        <div>
            <ul>
                <li>I wanna do a cool tutorial I've been saving</li>
                <li>It seems cool to learn this</li>
                <li>It looks like it's way better than tradiational HTML, CSS, and JS. It's way more dynamic and way funner, at least from the surface</li>
                <li>The logo looks cool</li>
            </ul>
        </div>
    )
}

function Header() {
    return (
        <header>
            <nav>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="50"/>
            </nav>
        </header>
    )
}

function Description() {
    return (
        <div>
            <h1>Reasons I wanna learn React</h1>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <p>Copyright 2023 oolteem8 development. All rights reserved.</p>
        </footer>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <div>
        <Header />
        <Description />
        <Page />
        <Footer />
    </div>
)