import React from "react";
import "./Header.css"

function Header(props) {
    return(
        <h1 className="header" >{props.page}</h1>
    )
}

export default Header