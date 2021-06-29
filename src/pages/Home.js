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
    </div>
  );
}

export default Home;