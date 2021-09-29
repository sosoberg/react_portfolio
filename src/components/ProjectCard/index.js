import React from "react";
import './style.css'

import ProjectPage from "../ProjectPage";

function ProjectCard(props) {

    function btnHandler() {

        const displayPage = document.querySelectorAll("[id='projectPageDisplay']")
        const displayCard = document.querySelectorAll("[id='project']")
        
        for (let i = 0; i < displayPage.length; i++) {
            console.log(props.id)
            const display = props.id - 1
            console.log(display)
            displayPage[display].classList.remove('displayNone')
            displayPage[display].classList.add('display')
            displayCard[display].classList.remove('display')
            displayCard[display].classList.add('displayNone')
        }

        
    }

    return (
        <>

            
            <div id='projectCardGrid' className='display'>
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
                <section id="project">
                    <div className='imageDiv'>
                        <img className='pcImage' src={props.image} alt="projectImg"/>
                            
                            <div className='techUsedDiv'>
                                <p className='techUsedHead'>{props.name}</p>
                                <p className='techUsed'><span className='boldspan'>Technology Used: </span>{props.tech}</p>
                            </div>
                    </div>
                    <button className="projectBtn" onClick={btnHandler}>View More</button>

                </section>
            </div>
        </>
    );
};

export default ProjectCard;