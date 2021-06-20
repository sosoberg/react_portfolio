import React from "react";
import './style.css'

function ProjectCard(props) {

    return (
        <div className="project">
            <h2>{props.name}</h2>
            <img src={props.image} width="500" height="300" alt="projectImg"/>
            <p>{props.description}</p>
            <a className="link" href={props.link}>Deploy</a>
        </div>
    );
};

export default ProjectCard;