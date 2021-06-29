import React, { Component } from "react";
import ProjectCard from '../components/ProjectCard';
import projects from '../projects.json';
import './grids.css'

class Projects extends Component {
    state = {
        projects
    };

    render () {
        return (
            <div className="projectGrid">
            {this.state.projects.map(project => (
                <ProjectCard 
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    link={project.link}
                />
            ))}
            </div>
        )
    }
}

export default Projects;