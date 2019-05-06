import React from 'react';
import './Navbar.css';

const Navbar =() => {
    return (
        <div className="container">
            <span>Sudoku</span>
            <div className="connect">
                <a >Login</a>
                <a >Register</a>
            </div>
        </div>
    )
}

export default Navbar;