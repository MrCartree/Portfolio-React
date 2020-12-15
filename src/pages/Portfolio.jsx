import React from "react";
import { Projects } from "../Projects.js";
import Header from '../component/Header/Header.js';
import ProjectCard from "../component/ProjectCard/Projectcard";

function Portfolio() {
    function renderProjects() {
        return Projects.map((project) => {
            return (
                <ProjectCard key={project.id} {...project} />
            )
        })
    }
    return (
        <React.Fragment>
            <Header page="Portfolio" />
            <div className="projectCards">
                {renderProjects()}
            </div>
        </React.Fragment>
    )
}

export default Portfolio;