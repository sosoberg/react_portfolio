import React from "react";
import './style.css'

function ProjectCard(props) {

    return (
        <div className="project">
            <h2 className="pcHeader">{props.name}</h2>
            <img className="pcImage" src={props.image} alt="projectImg"/>
            <p>{props.description}</p>
            <a className="link" href={props.link}>Deploy</a>
        </div>
    );
};

export default ProjectCard;