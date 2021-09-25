import React from "react";
import './style.css'

import ProjectPage from "../ProjectPage";

function btnHandler() {

    const displayPage = document.querySelectorAll("[id='projectPageDisplay']")
    
    for (let i = 0; i < displayPage.length; i++) {
        displayPage[i].style.display = 'block'
    }
    
}

function ProjectCard(props) {
    return (
        <div className='projectCardGrid'>
            <section className="project">
                <div className='imageDiv'>
                    <img className='pcImage' src={props.image} alt="projectImg"/>
                        <div className='techUsedDiv'>
                            <p className='techUsedHead'>{props.name}</p>
                            <p className='techUsed'><span className='boldspan'>Technology Used: </span>{props.tech}</p>
                        </div>
                </div>
                <button className="projectBtn" onClick={btnHandler}>View More</button>
                <ProjectPage 
                    key={props.id}
                    id={props.id}
                    name={props.name}
                    image={props.image}
                    description={props.description}
                    tech={props.tech}
                    githubLink={props.githubLink}
                    demoLink={props.demoLink}
                />
            </section>
        </div>
    );
};

export default ProjectCard;