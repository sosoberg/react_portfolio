import React, { Component } from "react";
import ProjectCard from '../components/ProjectCard';
import projects from '../projects.json';

class Projects extends Component {
    state = {
        projects
    };

    render () {
        return (
            <>
            {this.state.projects.map(project => (
                <ProjectCard 
                    id={project.id}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    link={project.link}
                />
            ))}
            </>
        )
    }
}

export default Projects;