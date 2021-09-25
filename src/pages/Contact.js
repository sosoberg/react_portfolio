import React from "react";

import Resume from "../components/Resume"

function Contact() {
  return (
    <aside className="contactGrid">
        <div className="contactModal">
            
            <h3 className="modalHeaders">Please feel free to reach out if you have any questions or work opportunities</h3>
                <div className='contactInfo'>
                    <p className="phone">Phone</p>
                      <p className='linkPage'>509-885-6067</p>
                    <p className="phone">Email</p>
                      <p className='linkPage'><a className='linkPage' href="mailto:samuelcoberg@gmail.com">samuelcoberg@gmail.com</a></p>
                    <p className="phone">Github</p>
                      <p className='linkPage'><a className='linkPage' href="https://github.com/sosoberg">sosoberg</a></p>
                    <p className="phone">LinkedIn</p>
                      <p className='linkPage'><a href="https://www.linkedin.com/in/samuel-oberg-00b228110/">Samuel Oberg</a></p>
                </div>
        </div>
        
        <Resume />
    </aside>
  );
}

export default Contact;