import React from "react";
import './style.css'

function TechnologyCard() {

    return (
        <section>
            <h3 className='techDivHeader'>Technological Experience:</h3>
                <h4 className='experienceHeader'>Front-End Development</h4>
                    <p className='techExperience'>
                        I have had extensive experience working on front-end projects 
                        in groups settings and on solo projects. Through using HTML, CSS, 
                        JavaScript and React.js, I am able to create interactive and clean 
                        UI's.
                    </p>
                    <ul className='projectList'>
                        <a href='https://github.com/sosoberg/ecommerce_backend'>
                            <li>Worth A Shot (Group Project)</li>
                        </a>
                    </ul>
                <h4 className="experienceHeader">Back-End Development</h4>
                    <p className='techExperience'>
                        I have a list of projects that are focused on the back-end development 
                        such as creating and connecting to databases with MongoDB and MySQL 
                        using Mongoose.js and Sequelize.js.
                    </p>
                    <ul className='projectList'>
                        <a href='https://github.com/sosoberg/ecommerce_backend'>
                            <li>E-Commerce Back-End Project</li>
                        </a>
                    </ul>
                <h4 className="experienceHeader">Full Stack</h4>
                    <p className='techExperience'>
                        I have created many full stack applications on my own and in group settings. 
                        Maintaining API routes, managing databases, and creating an immersive interface 
                        experience for the user.
                    </p>
                    <ul className='projectList'>
                        <a href='https://github.com/sosoberg/B-There'>
                            <li>B-There! (Group Project)</li>
                        </a>
                    </ul>
                <div className='emptyspace'></div>
        </section>
    );
};

export default TechnologyCard;