import React from "react";
import "./Projectcard.css"
import GitHub from "../../assets/images/iconmonstr-github-5-48.png"

function ProjectCard(props) {
    return (
        <div className="card" >
            <h3 className="card-text">{props.project}</h3>
            <div className="img-container">
                <img src={props.img} className="card-img-top" alt={props.project} />
            </div>
            <div className="card-body">
                <p className="card-text">{props.about}</p>
                <a href={props.gitHub} ><img src={GitHub} alt="Link to repo" /></a>
                <a className="linkTag" href={props.deployed} >Go to the deployed site here!</a>
            </div>
        </div>
    )
}

export default ProjectCard;