import React from 'react';
import "./Navbar.css";

function Navbar() {
    return <nav className="fixed-nav">
        <div className="container"> 
            <a className="link" href="#top">
                <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="Bootstrap" />
            </a>
            <section className="navbar">
                <ul>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>About</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
            </section>
        </div>
    </nav>
}

export default Navbar;