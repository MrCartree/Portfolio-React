import React from "react";
import "./BlogCard.css";

function ProjectCard(props) {
    return (
        <div className="card" >
            <h3 className="card-text">{props.title}</h3>
            <div className="card-body">
                <p className="card-text">{props.bloggy}</p>
            </div>
        </div>
    )
}

export default ProjectCard;