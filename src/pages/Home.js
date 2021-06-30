import React from "react";

function Home() {
  return (
    <div className="homeGrid">
        <section>
            <h2>Biography</h2>
                <p className="bio">
                    My name is Samuel Oberg and I am an aspiring Developer.
                     I am currently living and working in the city of Seattle as 
                    a Corporate Buyer for a supply company, but I am looking to 
                    change careers.
                </p>
                <p className="bio">
                    I recently decided to take the leap and joined a full-stack 
                    coding bootcamp hosted by the University of Washington this 
                    past January. I am very excited to see where this experience 
                    will take me.
                </p>
                <p className="bio">
                    The main language that we have been learning is JavaScript, 
                    and I have just started learning Node.js, which I am looking 
                    forward to mastering soon. By the end of the program, we will 
                    progress to studying REACT and several other programs centered
                     around JS.
                </p>
        </section>
        <img className="pcImage" src="./images/me.jpg" alt="projectImg"/>
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
    </div>
  );
}

export default Home;