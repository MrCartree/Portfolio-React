import React from "react";
import { Link } from "react-router-dom"
import Resume from "../../pages/Resume.pdf"

function Navbar() {
    return (
        <nav className="nav float-right">
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
            <li className="nav-item">
                <a 
                    className="nav-link" 
                    href={Resume}
                    rel="noreferrer"
                    target="_blank"
                >Resume</a>
            </li>
        </nav>
    )
}

export default Navbar;
