import React from "react";
import "./Projectcard.css"

function ProjectCard(props) {
    return (
        <div className="card" >
            <h3 className="card-text">{props.project}</h3>
            <div className="img-container">
                <img src={props.img} className="card-img-top" alt={props.project} />
            </div>
            <div className="card-body">
                <p className="card-text">{props.about}</p>
                <a href={props.gitHub} ><img src="/images/iconmonstr-github-5-48.png" alt="Link to repo" /></a>
                <a className="linkTag" href={props.deployed} >Link to site</a>
                <p className="card-text"></p>
            </div>
        </div>
    )
}

export default ProjectCard;