import React from "react";
import './style.css'

function ProjectCard(props) {

    return (
        <div className='projectCardGrid'>
            <section className="project">
                <h2 className="pcHeader">{props.name}</h2>
                <img className="pcImage" src={props.image} alt="projectImg"/>
            </section>
            <aside className='projectExtra'>
                <p className='projectDescriptionHead'>Project Description</p>
                    <p>{props.description}</p>
                    <p className='techUsedHead'>Technologies Used:</p>
                    <p className='techUsed'>{props.tech}</p>
                    <div className='projectButtons'>
                        <a className="githubLink" href={props.githubLink}>Github</a><a className="demoLink" href={props.demoLink}>Demo</a>
                    </div>
            </aside>
        </div>
    );
};

export default ProjectCard;