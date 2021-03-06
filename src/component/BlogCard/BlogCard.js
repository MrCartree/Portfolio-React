import React from "react";
import "./BlogCard.css";

function ProjectCard(props) {
    return (
        <div className="blog-card card" >
            <h3 className="card-text">{props.title}</h3>
            <p>{props.date}</p>
            <div className="card-body">
                <p className="card-text">{props.bloggy}</p>
            </div>
        </div>
    )
}

export default ProjectCard;