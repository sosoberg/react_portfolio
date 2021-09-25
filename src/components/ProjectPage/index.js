import React from "react";
import './style.css'

function ProjectPage(props) {

    return (
        <div id='projectPageDisplay'>
            <p>{props.name}</p>
        </div>
    );
};

export default ProjectPage;