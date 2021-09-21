import React from "react";
import './style.css'

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
            </section>
            {/* <aside className='projectExtra'>
            <h2 className="pcHeader">{props.name}</h2>
                <p className='projectDescriptionHead'>Project Description</p>
                
                    <p>{props.description}</p>
                    <p className='techUsedHead'>Technologies Used:</p>
                    <p className='techUsed'>{props.tech}</p>
                    <div className='projectButtons'>
                        <a className="githubLink" href={props.githubLink}>Github</a><a className="demoLink" href={props.demoLink}>Demo</a>
                    </div>
            </aside> */}
        </div>
    );
};

export default ProjectCard;