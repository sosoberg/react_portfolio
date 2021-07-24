import React from "react";

function Home() {
  return (
    <div className="homeGrid">
        <section>
            <h2 className='homeHeader'>About Me</h2>
                <p className="bio">
                    An aspiring Software Developer living and working in the city of Seattle as 
                    a Corporate Buyer for a supply company and looking to 
                    change careers.
                </p>
                <p className="bio">
                    Took the leap and joined a full-stack 
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
        <img className="profilePicture" src="./images/me.jpg" alt="projectImg"/>
    </div>
    
  );
}

export default Home;