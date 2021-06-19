import React, { Component } from "react";
import ProjectCard from '../components/ProjectCard';
import Wrapper from "../components/Wrapper";
import projects from '../projects.json';

class Projects extends Component {
    state = {
        projects
    };

    render () {
            
        console.log(projects)
        return (
            <Wrapper>
            {this.state.projects.map(project => {
                <ProjectCard 
                    id={project.id}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    link={project.link}
                />
            })}
            </Wrapper>
        )
    }
}

export default Projects;