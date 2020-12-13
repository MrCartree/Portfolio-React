import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav">
            <li className="nav-item">
                <Link 
                    className="nav-link" 
                    to="/"
                    >Homepage</Link>
            </li>
            <li className="nav-item">
                <Link 
                    className="nav-link" 
                    to="/contact"
                >Contact me</Link>
            </li>
            <li className="nav-item">
                <Link 
                    className="nav-link" 
                    to="/portfolio"
                >Projects</Link>
            </li>
        </nav>
    )
}

export default Navbar;
