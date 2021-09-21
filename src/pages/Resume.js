import React from "react";

function Resume() {
  return (
    <section className='resumeDiv'>
         <h3>Download My Resume!</h3>
            <img className='resumeImage' src="./images/resume.PNG" alt="myresume"/>
                <a href="./documents/Resume.pdf">Download</a>
    </section>
  );
}

export default Resume;