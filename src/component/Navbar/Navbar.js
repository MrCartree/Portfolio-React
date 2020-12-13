import React from "react";

function Navbar() {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" href="/">Homepage</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contact">Contact me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/portfolio">Projects</a>
            </li>
        </ul>
    )
}

export default Navbar;
