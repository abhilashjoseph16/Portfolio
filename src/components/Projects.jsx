import React, { useState } from "react";
import projects from "../data/projects.json";
import githubIcon from "../assets/icons/github.png";

function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };
  return (
    <div className="portfolio-projects-main-container">
      <div className="projects-title-container">
        <h1>Featured Projects</h1>
        <div className="projects-underline"></div>
        <p>A showcase of my recent work and passion projects</p>
      </div>
      <div className="projects-grid-container">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div key={index} className="project-box">
            <div className="project-box-image">
              <span>{project.category}</span>
              <img src={project.image} alt={project.title} />
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferer">
                  <img src={githubIcon} alt="github" />
                </a>
              )}
            </div>
            <div className="projects-box-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="projects-technologies_box">
                {project.technologies.map((technology, id) => (
                  <div key={id} className="technology-box">
                    <span>{technology}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < projects.length && (
        <div className="projects-view-more-button_box">
          <button onClick={handleViewMore}>View More Projects</button>
        </div>
      )}
    </div>
  );
}

export default Projects;
