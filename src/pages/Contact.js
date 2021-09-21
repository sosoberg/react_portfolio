import React from "react";

function Contact() {
  return (
    <aside>
        <div className="contactModal">
            <h3 className="modalHeaders">Contact Me</h3>
                <div className="iconGrid">
                    <a href="https://github.com/sosoberg">
                        <img className="icon" src="./images/githubicon.png" alt="Sams Git Hub" />
                    </a>  
                    <a href="https://www.linkedin.com/in/samuel-oberg-00b228110/">   
                        <img className="icon" src="./images/linkedicon.png" alt="SamsLinkedIn" />         
                    </a>
                    <a href="mailto:samuelcoberg@gmail.com">   
                        <img className="icon" src="./images/gmailicon.png" alt="SamsEmail" />         
                    </a>
                </div>
                <div>
                    <p className="phone">My Phone: 509-885-6067</p>
                </div>
        </div>
    </aside>
  );
}

export default Contact;