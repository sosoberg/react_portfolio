import React from "react";
import './style.css'

function ProjectCard(props) {
    return (
        <>
            <p>{props.name}</p>
            <p>{props.image}</p>
            <p>{props.description}</p>
            <p>{props.link}</p>
        </>
    );
};

export default ProjectCard;