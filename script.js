// import React from 'react'
// import ReactDOM from 'react-dom'

function Page() {
    return (
        <div>
            <h1>Reasons I wanna learn React</h1>

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
                <img></img>
            </nav>
        </header>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Page />)