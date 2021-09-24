import React from "react";

import './style.css'

function Resume() {
  return (
    <section className='resumeDiv'>
         <h3 className='resumeHeader'>Download My Resume!</h3>
          <div className='resumeContain'>
            <img className='resumeImage' src="./images/resume.PNG" alt="myresume" height='600px' width='550px'/>
            <div className='resumeBtnContain'>
              <a href="./documents/Resume.pdf" className='resumeDnldBtn'>Download</a>
            </div>
          </div>
    </section>
  );
}

export default Resume;