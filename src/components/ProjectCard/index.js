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
        </div>
    );
};

export default ProjectCard;