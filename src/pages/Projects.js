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
            <div id="projectGrid">
            {this.state.projects.map(project => (
                <ProjectCard 
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    description2={project.description2}
                    tech={project.tech}
                    githubLink={project.githubLink}
                    demoLink={project.demoLink}
                />
            ))}
            </div>
        )
    }
}

export default Projects;