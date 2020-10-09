import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';


function Header() {
    return <header className="header">
        <Navbar />
        <div className="one">Welcome To Our Studio!</div>
        <div className="two">IT'S NICE TO MEET YOU</div>
        <button>TELL ME MORE</button>
    </header>
}

export default Header