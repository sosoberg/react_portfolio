import React from "react";
import './style.css'

function ProjectPage(props) {

    function btnHandler() {

        const displayPage = document.querySelectorAll("[id='projectPageDisplay']")
        const displayCard = document.querySelectorAll("[id='project']")
        
        for (let i = 0; i < displayPage.length; i++) {
            console.log(props.id)
            const display = props.id - 1
            console.log(display)
            displayCard[display].classList.remove('displayNone')
            displayCard[display].classList.add('display')
            displayPage[display].classList.remove('display')
            displayPage[display].classList.add('displayNone')
        }

        
    }

    return (
        <>
            <section id='projectPageDisplay' className='displayNone'>
                    <div className='imageDiv'>
                        <img className='pcImage' src={props.image} alt="projectImg"/>
                            
                            <div className='techUsedDiv'>
                                <p className='techUsedHead'>{props.name}</p>
                                <p className='techUsed'><span className='boldspan'>Technology Used: </span>{props.tech}</p>
                            </div>
                    </div>
                    <button className="projectBtn" onClick={btnHandler}>Close</button>
            </section>
            
        </>
    );
};

export default ProjectPage;