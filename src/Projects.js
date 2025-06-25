import React, { useState } from "react";
import "./stylesheets/Project.css";
import HealthCareImage from './Images/healthcare.jpg';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "HealthCareSystem",
      description:
        "HealthCareSystem is a Spring Boot API featuring JWT-based security, user authentication, profile management, and image upload, built to integrate with a React frontend..",
      image: HealthCareImage,
      category: "java",
      technologies: ["java", "react", "postman", "maven", "Spring boot", "Mysql"],
      github: "https://github.com/tarundangeti/HealthcareSystem",
    },
  ];  

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "java", name: "java" },
    { id: "web-dev", name: "Web Development" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="project-filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${
              activeFilter === filter.id ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Demo
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
