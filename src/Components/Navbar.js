// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <h1>My Website</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/students">Students</Link>
                <Link to="/test">Test</Link>
            </div>
        </nav>
    );
};

export default Navbar;
