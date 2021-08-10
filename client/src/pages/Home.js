import React from "react";
import TechnologyCard from "../components/TechnologyCard";

function Home() {
  return (
    <div className="homeGrid">
        <h2 className='introduction'>Hello, my name is Sam. I am a recent graduate of the Full Stack Coding Bootcamp at the University of Washington</h2>
        <img className='mountainImage' src="./images/ocean.jpg" alt="mountains"/>
        <section>
            <div className='bioDiv'>
            <h2 className='homeHeader'>About:</h2>
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
                    <img className="profilePicture" src="./images/me.jpg" alt="projectImg"/>
            </div>
        </section>
            <div class="techAside">
                <TechnologyCard />
            </div>
    </div>
    
  );
}

export default Home;